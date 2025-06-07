// validations/bus.validation.js
import Joi from "joi";

export const busCreateValidation = Joi.object({
  phone_number: Joi.string().required(),
  total_seats: Joi.number().integer().min(1).required(),
});

export const busUpdateValidation = Joi.object({
  phone_number: Joi.string(),
  total_seats: Joi.number().integer().min(1),
});

export const idParamValidation = Joi.object({
  id: Joi.number().integer().min(1).required(),
});
