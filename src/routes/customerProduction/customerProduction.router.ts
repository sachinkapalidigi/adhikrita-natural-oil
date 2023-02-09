import express from "express";
import requestValidator from "../../middlewares/requestValidator";
import {
  httpCreteCustomerProduction,
  httpDeleteCustomerProduction,
  httpGetCustomerProduction,
  httpGetCustomerProductions,
  httpUpdateCustomerProduction,
} from "./customerProduction.controller";
import { CustomerProductionControllerSchema } from "./customerProduction.validation.schema";

const customerProductionRouter = express.Router();

customerProductionRouter
  .route("/")
  .get(httpGetCustomerProductions)
  .post(
    requestValidator(
      CustomerProductionControllerSchema.createCustomerProductionSchema
    ),
    httpCreteCustomerProduction
  );

customerProductionRouter
  .route("/:id")
  .get(httpGetCustomerProduction)
  .put(
    requestValidator(
      CustomerProductionControllerSchema.createCustomerProductionSchema
    ),
    httpUpdateCustomerProduction
  )
  .delete(httpDeleteCustomerProduction);

export default customerProductionRouter;
