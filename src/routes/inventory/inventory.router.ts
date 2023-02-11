import express from "express";
import requestValidator from "../../middlewares/requestValidator";
import { httpAddToInventory, httpGetInventory } from "./inventory.controller";
import { InventoryControllerSchema } from "./inventory.validation.schema";

const inventoryRouter = express.Router();

inventoryRouter.get("/", httpGetInventory);

inventoryRouter.post(
  "/",
  requestValidator(InventoryControllerSchema.addToInventorySchema),
  httpAddToInventory
);

export default inventoryRouter;
