import { Request, Response } from "express";
import { badRequestResponse } from "../helper/customMessage";
import { loginService } from "../services/auth.service";
async function login(req: Request, res: Response) {
  try {
    const body: { email: string; password: string } = req.body;

    const jwtToken = await loginService(body);
    req.session = {
      jwt: userJwt,
    };
  } catch (error) {
    badRequestResponse(req, res, "Something went wrong ");
  }
}
