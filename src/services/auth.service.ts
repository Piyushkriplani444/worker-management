import { Request, Response } from "express";
import { User } from "../models/user";
import { Password } from "./password";
import { createJWT } from "../helper/jwtToken";

export async function loginService(payload: any) {
  try {
    const { email, password } = payload;

    const existUser = await User.findOne({ email: email });
    if (!existUser) {
      throw new Error("User not found");
    }

    const passwordMatch = await Password.compare(existUser.password, password);
    if (!passwordMatch) {
      throw new Error("Invalid credentials");
    }

    const userJWT = createJWT(existUser);

    return userJWT;
  } catch (error) {
    throw error;
  }
}
