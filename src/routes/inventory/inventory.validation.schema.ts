import Joi from "joi";

const addToInventorySchema = Joi.object().keys({
  productId: Joi.string().required(),
  quantity: Joi.number().required(),
  sku: Joi.object().keys({
    name: Joi.string().required(),
    quantity: Joi.number().required(),
    price: Joi.number().required(),
  }),
});

export const InventoryControllerSchema = {
  addToInventorySchema,
};
