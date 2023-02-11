import express from "express";
import requestValidator from "../../middlewares/requestValidator";
import { httpCreateSale, httpGetSale, httpGetSales } from "./sales.controller";
import { SalesControllerSchema } from "./sales.validation.schema";

const salesRouter = express.Router();

salesRouter
  .route("/")
  .get(httpGetSales)
  .post(
    requestValidator(SalesControllerSchema.createSaleSchema),
    httpCreateSale
  );

salesRouter
  .route("/:id")
  .get(httpGetSale)
  .put(
    requestValidator(SalesControllerSchema.createSaleSchema),
    httpCreateSale
  );

export default salesRouter;
