import { Request, Response } from "express";
import { badRequestResponse, okResponse } from "../helper/customMessage";
import { loginService } from "../services/auth.service";
async function login(req: Request, res: Response) {
  try {
    const body: { email: string; password: string } = req.body;

    const userJwt = await loginService(body);
    console.log("userjwt", userJwt);
    res.cookie("accessToken", userJwt, {
      httpOnly: true,
      secure: true,
    });

    okResponse(req, res, "Login Successfull");
  } catch (error) {
    badRequestResponse(req, res, error);
  }
}

export const LoginController = {
  login,
};
