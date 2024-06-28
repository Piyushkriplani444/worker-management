import express, { Request, Response } from "express";
import connectToMongoDB from "./connect";
import dotenv from "dotenv";
dotenv.config();

const mongodb: string | undefined = process.env.MONGO_CONNECT;
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectToMongoDB(mongodb as string)
  .then(() => console.log("Mongodb connect"))
  .catch(() => console.log("Mongodb error"));

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("<h1>Hello world</h1>");
});
app.listen(port, () => {
  console.log("Port is running on ports 3000");
});
