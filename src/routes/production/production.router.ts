import express from "express";

import requestValidator from "../../middlewares/requestValidator";
import {
  httpCreateProduction,
  httpDeleteProduction,
  httpGetProduction,
  httpGetProductions,
  httpUpdateProduction,
} from "./production.controller";
import { ProductionControllerSchema } from "./production.validation.schema";

const productionRouter = express.Router();

productionRouter
  .route("/")
  .get(httpGetProductions)
  .post(
    requestValidator(ProductionControllerSchema.createProductionSchema),
    httpCreateProduction
  );

productionRouter
  .route("/:id")
  .get(httpGetProduction)
  .patch(httpUpdateProduction)
  .delete(httpDeleteProduction);

export default productionRouter;
