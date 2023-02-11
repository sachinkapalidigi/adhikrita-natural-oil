import Joi from "joi";

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const registerSchema = Joi.object({
  name: Joi.string().required(),
  username: Joi.string().required(),
  password: Joi.string()
    .required()
    .pattern(new RegExp("^[a-zA-Z0-9]{6,30}$"))
    .options({
      messages: {
        "string.pattern.base": "Password must be at least 6 characters long",
      },
    }),
  confirmPassword: Joi.ref("password"),
});

export const AuthControllerSchema = { loginSchema, registerSchema };
