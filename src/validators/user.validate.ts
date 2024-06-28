import Joi from "joi";

const createUser = Joi.object({
  email: Joi.string().email().required().messages({
    "any.required": "Email is Required",
  }),
  zipCode: Joi.string()
    .regex(/^\d{6}$/)
    .required()
    .messages({ "any.required": "zipCode is Required " }),
}).unknown(true);

const updateUser = Joi.object({
  email: Joi.string().email().required().messages({
    "any.required": "Email is Required",
  }),
  zipCode: Joi.string()
    .regex(/^\d{6}$/)
    .required()
    .messages({ "any.required": "zipCode is Required " }),
}).unknown(true);

export const validator = {
  createUser,
  updateUser,
};
