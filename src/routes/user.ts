import express from "express";
import {
  createUser,
  updateUser,
  updateUserPatch,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user";
import { validator } from "../validators/user.validate";
import { schemaValidator } from "../middleware/schemaValidator";
import { currentUser } from "../middleware/jwtAuthentication";

const routes = express.Router();

routes.get("/get_users", currentUser, getUsers);

routes.get("/worko/user/:userId", currentUser, getUser);

routes.post("/create", schemaValidator(validator.createUser), createUser);
routes.put(
  "/update",
  schemaValidator(validator.updateUser),
  currentUser,
  updateUser
);

routes.patch("/update", currentUser, updateUserPatch);

routes.delete("/delete", currentUser, deleteUser);

export const UserRouter = routes;
