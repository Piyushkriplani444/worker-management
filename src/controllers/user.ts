import { Request, Response } from "express";
import * as UserServices from "../services/user.service";
import { badRequestResponse, okResponse } from "../helper/customMessage";

export const createUser = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    console.log("piyush kriplani");
    console.log("bb", body);
    const create = await UserServices.createNewUser(body);

    return okResponse(req, res, create);
  } catch (error) {
    badRequestResponse(req, res, "Error on creating User");
  }
};
