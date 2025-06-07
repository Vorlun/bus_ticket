import Joi from "joi";

export const provinceCreateValidation = Joi.object({
  name: Joi.string().min(2).max(100).required(),
});

export const provinceUpdateValidation = Joi.object({
  name: Joi.string().min(2).max(100),
});

export const idParamValidation = Joi.object({
  id: Joi.number().integer().min(1).required(),
});
