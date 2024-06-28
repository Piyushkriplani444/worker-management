import { Request, Response } from "express";
import * as UserServices from "../services/user.service";
import { badRequestResponse, okResponse } from "../helper/customMessage";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getUsers();
    okResponse(req, res, result);
  } catch (error) {
    badRequestResponse(req, res, error);
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await UserServices.getUser(userId);
    okResponse(req, res, result);
  } catch (error) {
    badRequestResponse(req, res, error);
  }
};
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

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const userInfo = req.body;
    const result = await UserServices.updateUserPut(userInfo, id);
    okResponse(req, res, result);
  } catch (error) {
    badRequestResponse(req, res, error);
  }
};

export const updateUserPatch = async (req: Request, res: Response) => {
  try {
    console.log("New www");
    const { id } = req.body;
    const userInfo = req.body;
    const result = await UserServices.updateUserPatch(userInfo, id);
    okResponse(req, res, result);
  } catch (error) {
    badRequestResponse(req, res, error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    console.log("delete user");
    const { id } = req.body;
    const result = await UserServices.softDelete(id);
    return okResponse(req, res, result);
  } catch (error) {
    badRequestResponse(req, res, error);
  }
};
