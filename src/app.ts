import express, { Application, Request, Response, NextFunction } from "express";
//import router from "./routes/index.routes";
import cors from "cors";
/* import authenticate from './middlewares/authenticate';
import authorize from './middlewares/authorize';
import validate from './middlewares/validate';*/
import connectDB from "./connectDB";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();
const port: number | string = process.env.PORT || 3000;
//const db_uri: string = process.env.DB_URI || '';

// Allow requests from any origin
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

/* app.use(authenticate);
app.use(authorize);
app.use(validate); */

// app.use("/api/v1/", router);

app.listen(port, () => {
  console.log(`Server has started running on port ${port}`);
});