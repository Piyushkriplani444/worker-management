const Joi = require("joi");

const createWorker = Joi.object({
  email: Joi.string().email().required().message({
    "any.required": "Email is Required",
  }),
  zipCode: Joi.string()
    .regex(/^\d{5}$/)
    .required()
    .message({ "any.required": "zipCode is Required " }),
});

const updateWorker = Joi.object({
  email: Joi.string().email().required().message({
    "any.required": "Email is Required",
  }),
  zipCode: Joi.string()
    .regex(/^\d{5}$/)
    .required()
    .message({ "any.required": "zipCode is Required " }),
});

export const validator = {
  createWorker,
  updateWorker,
};
