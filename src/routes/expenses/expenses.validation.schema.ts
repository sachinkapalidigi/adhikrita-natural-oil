import Joi from "joi";

const createExpenseSchema = Joi.object().keys({
  date: Joi.date().required(),
  description: Joi.string().required(),
  amount: Joi.number().required(),
});

export const ExpenseControllerSchema = { createExpenseSchema };
