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
  res.send("Welcome to the Navigation Page \"https://hotel-management-apis-with-typescript-2.onrender.com/api/v1/room-types\" to view all Room-Types \"https://hotel-management-apis-with-typescript-2.onrender.com/api/v1/rooms\" to view all Rooms\"https://www.postman.com\" to sign in to Postman to test APIs");
})
app.use("/api/v1/", router);

app.listen(port, () => {
  console.log(`Server has started running on port ${port}`);
});