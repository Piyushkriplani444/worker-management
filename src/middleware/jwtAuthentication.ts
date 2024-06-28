import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { badRequestResponse } from "../helper/customMessage";
import { User } from "../models/user";

interface UserPayload {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const currentUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.headers?.cookie) {
    next();
  }
  try {
    const accessToken = req.headers?.cookie || "";
    let token = accessToken?.split("=")[1];

    if (!token) {
      throw new Error("You are not authorized to access");
    }

    const payload = jwt.verify(token, process.env.JWT_KEY!) as JwtPayload;

    const { userEmail } = payload;
    const isExistUser = await User.findOne({ email: userEmail });
    if (isExistUser?.email !== userEmail) {
      throw new Error("Forbidden");
    }

    next();
  } catch (error) {
    next(error);
  }
};
