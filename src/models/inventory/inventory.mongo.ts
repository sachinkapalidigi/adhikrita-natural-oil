import mongoose from "mongoose";
import SkuSchema from "../products/sku.schema";

const InventorySchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  sku: {
    type: SkuSchema,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: [0, "Inventory quantity must be greater than 0"], // NOTE: This is not woring.
  },
});

export default mongoose.model("Inventory", InventorySchema);
