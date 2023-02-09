import Joi from "joi";

const createProductionSchema = Joi.object().keys({
  date: Joi.date().required(),
  material: Joi.string().required(),
  inputQuantity: Joi.number().required(),
  outputQuantity: Joi.number().required(),
});

export const ProductionControllerSchema = { createProductionSchema };
