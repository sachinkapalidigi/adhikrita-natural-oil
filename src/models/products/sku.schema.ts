import { Schema } from "mongoose";

const SkuSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    required: true,
    default: "liter",
  },
  currency: {
    type: String,
    required: true,
    default: "INR",
  },
});

export default SkuSchema;
