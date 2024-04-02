import express, { Application} from "express";
import router from "./routes/index.routes";
import cors from "cors";
import connectDB from "./connectDB";
import dotenv from "dotenv";
import path from 'path';

dotenv.config();

const app: Application = express();
const port: string | number = process.env.PORT || 4000;

// Allow requests from any origin
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.get('/', (req, res) => {
  res.send("Welcome to the Navigation Page. Kindly add \"/api/v1/\" to the URL or go to \"https://www.postman.com\" to sign in to Postman and test the API end-points better");
})
app.use("/api/v1/", router);

app.listen(port, () => {
  console.log(`Server has started running on port ${port}`);
});