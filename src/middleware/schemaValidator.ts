import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";
import { badRequestResponse } from "../helper/customMessage";

export const schemaValidator = (schema: Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      badRequestResponse(req, res, error);
    }
    next();
  };
};
