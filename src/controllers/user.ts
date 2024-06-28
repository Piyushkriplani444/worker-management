import { Request, Response } from "express";
import * as UserServices from "../services/user.service";
import { badRequestResponse, okResponse } from "../helper/customMessage";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getUsers();
    return okResponse(req, res, result);
  } catch (error) {
    return badRequestResponse(req, res, error);
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    console.log(userId);
    const result = await UserServices.getUser(userId);
    console.log("pkplpkpkpk", result);
    return okResponse(req, res, result);
  } catch (error) {
    return badRequestResponse(req, res, error);
  }
};
export const createUser = async (req: Request, res: Response) => {
  try {
    console.log("rrererer");
    const body = req.body;
    console.log("piyush kriplani");
    console.log("bb", body);
    const create = await UserServices.createNewUser(body);

    return okResponse(req, res, create);
  } catch (error) {
    return badRequestResponse(req, res, "Error on creating User");
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const userInfo = req.body;
    const result = await UserServices.updateUser(userInfo, id);
    return okResponse(req, res, result);
  } catch (error) {
    return badRequestResponse(req, res, error);
  }
};

export const updateUserPatch = async (req: Request, res: Response) => {
  try {
    console.log("New www");
    const { id } = req.body;
    const userInfo = req.body;
    const result = await UserServices.updateUserPatch(userInfo, id);
    return okResponse(req, res, result);
  } catch (error) {
    return badRequestResponse(req, res, error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    console.log("delete user");
    const { id } = req.body;
    const result = await UserServices.softDelete(id);
    return okResponse(req, res, result);
  } catch (error) {
    return badRequestResponse(req, res, error);
  }
};
