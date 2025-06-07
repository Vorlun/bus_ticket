import Joi from "joi";

export const createRoleSchema = Joi.object({
  name: Joi.string()
    .valid("admin", "manager", "operator", "user")
    .required()
    .messages({
      "any.only": `"name" faqat [admin, manager, operator, user] bo'lishi mumkin`,
    }),
});

export const assignRolesSchema = Joi.object({
  user_id: Joi.number().integer().required(),
  role_ids: Joi.array().items(Joi.number().integer()).min(1).required(),
});
