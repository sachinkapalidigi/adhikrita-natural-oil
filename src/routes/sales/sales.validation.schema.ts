import Joi from "joi";

const createSaleSchema = Joi.object().keys({
  date: Joi.date().required(),
  products: Joi.array()
    .items(
      Joi.object().keys({
        productId: Joi.string().required(),
        sku: Joi.object().keys({
          name: Joi.string().required(),
          quantity: Joi.number().required(),
          price: Joi.number().required(),
        }),
        quantity: Joi.number().required(),
      })
    )
    .required(),
  customerDetails: Joi.object().keys({
    name: Joi.string(),
    email: Joi.string().email(),
    phone: Joi.string(),
    customerType: Joi.string().required(),
  }),
  paymentDetails: Joi.object().keys({
    paidAmount: Joi.number().required(),
    date: Joi.date().required(),
    paymentMethod: Joi.string().required(),
  }),
});

export const SalesControllerSchema = {
  createSaleSchema,
};
