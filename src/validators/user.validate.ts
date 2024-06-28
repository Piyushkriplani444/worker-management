const Joi = require("joi");

const createUser = Joi.object({
  email: Joi.string().email().required().message({
    "any.required": "Email is Required",
  }),
  zipCode: Joi.string()
    .regex(/^\d{5}$/)
    .required()
    .message({ "any.required": "zipCode is Required " }),
});

const updateUser = Joi.object({
  email: Joi.string().email().required().message({
    "any.required": "Email is Required",
  }),
  zipCode: Joi.string()
    .regex(/^\d{5}$/)
    .required()
    .message({ "any.required": "zipCode is Required " }),
});

export const validator = {
  createUser,
  updateUser,
};
