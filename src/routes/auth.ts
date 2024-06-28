import express from "express";
import { LoginController } from "../controllers/auth";

const routes = express.Router();
routes.post("/auth", LoginController.login);

export default routes;
