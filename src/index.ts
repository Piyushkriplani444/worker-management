import express, { Request, Response } from "express";
import connectToMongoDB from "./connect";
import dotenv from "dotenv";
import cookieSession from "cookie-session";
import { UserRouter } from "./routes/user";
import { AuthRouter } from "./routes/auth";
dotenv.config();

const mongodb = process.env.MONGO_CONNECT;
const port = process.env.PORT || 3000;

const app = express();

app.set("trust proxy", true);
app.use(
  cookieSession({
    signed: false,
    secure: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectToMongoDB(mongodb as string)
  .then(() => console.log("Mongodb connectttt"))
  .catch(() => console.log("Mongodb error"));

app.use("/", UserRouter);
app.use("/", AuthRouter);

// app.get("/", (req: Request, res: Response) => {
//   res.status(200).send("<h1>Hello world</h1>");
// });
app.listen(port, () => {
  console.log("Port is running on ports 3000");
});
