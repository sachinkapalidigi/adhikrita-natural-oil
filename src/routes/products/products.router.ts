import express from "express";

import requestValidator from "../../middlewares/requestValidator";
import {
  httpGetProducts,
  httpAddProduct,
  httpGetProduct,
  httpUpdateProduct,
} from "./products.controller";
import { ProductsControllerSchema } from "./products.validation.schema";

const productsRouter = express.Router();

productsRouter.get("/", httpGetProducts);

productsRouter.post(
  "/",
  requestValidator(ProductsControllerSchema.createProductSchema),
  httpAddProduct
);

productsRouter.get("/:id", httpGetProduct);

productsRouter.put("/:id", httpUpdateProduct);

export default productsRouter;
