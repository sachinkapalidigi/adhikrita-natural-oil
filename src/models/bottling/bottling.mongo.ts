import mongoose from "mongoose";
import SkuSchema from "../products/sku.schema";

const BottlingSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  bottles: {
    type: Number,
    required: true,
  },
  sku: {
    type: SkuSchema,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Bottling", BottlingSchema);
