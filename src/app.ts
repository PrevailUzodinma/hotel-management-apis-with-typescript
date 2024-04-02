import express, { Application} from "express";
import router from "./routes/index.routes";
import cors from "cors";
import connectDB from "./connectDB";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();
const port: string | number = process.env.PORT || 4000;

// Allow requests from any origin
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();


app.use("/api/v1/", router);

app.listen(port, () => {
  console.log(`Server has started running on port ${port}`);
});