import mongoose, { Schema } from "mongoose";
import SkuSchema from "../products/sku.schema";
import PaymentInfoSchema from "./paymentInfo.schema";

const ProductRefSchema = new mongoose.Schema({
  productId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  sku: {
    type: SkuSchema,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    defaultValue: 1,
  },
});

const CustomerDetailsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  mobile: {
    type: String,
  },
  email: {
    type: String,
  },
  customerType: {
    type: String,
  },
});

const SalesSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  products: {
    type: [ProductRefSchema],
    required: true,
  },
  customerDetails: {
    type: CustomerDetailsSchema,
    required: true,
  },
  paymentDetails: {
    type: PaymentInfoSchema,
    required: true,
  },
});

export default mongoose.model("Sales", SalesSchema);
