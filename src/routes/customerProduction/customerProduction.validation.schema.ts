import Joi from "joi";

const createCustomerProductionSchema = Joi.object({
  date: Joi.date().required(),
  material: Joi.string().required(),
  quantity: Joi.number().required(),
  paymentDetails: Joi.object({
    // totalAmount: Joi.number().required(),
    paidAmount: Joi.number().required(),
    date: Joi.date().required(),
    paymentMethod: Joi.string().required(),
  }),
});

export const CustomerProductionControllerSchema = {
  createCustomerProductionSchema,
};
