import express from "express";
import { UserRouter } from "./routes/user";
import { AuthRouter } from "./routes/auth";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/",
    route: UserRouter,
  },
  {
    path: "/",
    route: AuthRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export const Routers = router;
