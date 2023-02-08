import express from "express";

import requestValidator from "../../middlewares/requestValidator";
import {
  httpGetProducts,
  httpAddProduct,
  httpGetProduct,
  httpUpdateProduct,
} from "./products.controller";
import { ProductsControllerSchema } from "./products.validation.schema";

const productsApi = express.Router();

productsApi.get("/", httpGetProducts);

productsApi.post(
  "/",
  requestValidator(ProductsControllerSchema.createProductSchema),
  httpAddProduct
);

productsApi.get("/:id", httpGetProduct);

productsApi.put("/:id", httpUpdateProduct);

export default productsApi;
