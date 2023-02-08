import Joi from "joi";

const createProductSchema = Joi.object({
  name: Joi.string().required(),
  materials: Joi.array().items(Joi.string()).required(),
  skus: Joi.array()
    .items(
      Joi.object({
        name: Joi.string().required(),
        price: Joi.number().required(),
        quantity: Joi.number().required(),
        unit: Joi.string().equal("liter", "kg").default("liter"),
      })
    )
    .required(),
});

export const ProductsControllerSchema = {
  createProductSchema,
};
