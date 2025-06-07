import Joi from "joi";

export const cityCreateValidation = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  province_id: Joi.number().integer().min(1).required(),
});

export const cityUpdateValidation = Joi.object({
  name: Joi.string().min(2).max(100),
  province_id: Joi.number().integer().min(1),
});

export const idParamValidation = Joi.object({
  id: Joi.number().integer().min(1).required(),
});
