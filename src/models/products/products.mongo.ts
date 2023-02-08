import mongoose, { Schema } from "mongoose";
import SkuSchema from "./sku.schema";

const ProductsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  skus: {
    type: [SkuSchema],
    required: true,
  },
  materials: {
    type: [String],
    required: true,
  },
});

export default mongoose.model("Product", ProductsSchema);
