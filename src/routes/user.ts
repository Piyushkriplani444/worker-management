import express from "express";
import { createUser } from "../controllers/user";
import { validator } from "../validators/user.validate";
import { schemaValidator } from "../middleware/schemaValidator";
// import { createNewUser } from "../services/user.service";

const routes = express.Router();

// routes.get("/list_work");

// routes.get('/worko/user/:userId');

routes.post("/create", schemaValidator(validator.createUser), createUser);
// routes.put('/update')

// routes.patch('/update-user')

// routes.delete('/delete-user')

export const UserRouter = routes;
