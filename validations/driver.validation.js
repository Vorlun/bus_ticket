import Joi from "joi";

export const driverCreateValidation = Joi.object({
  full_name: Joi.string().min(3).max(100).required(),
  phone_number: Joi.string()
    .pattern(/^\+998\d{9}$/)
    .required(),
});

export const driverUpdateValidation = Joi.object({
  full_name: Joi.string().min(3).max(100),
  phone_number: Joi.string().pattern(/^\+998\d{9}$/),
});

export const idParamValidation = Joi.object({
  id: Joi.number().integer().positive().required(),
});
