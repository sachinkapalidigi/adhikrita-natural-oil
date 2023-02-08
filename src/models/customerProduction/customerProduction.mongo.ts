import mongoose from "mongoose";
import PaymentInfoSchema from "../sales/paymentInfo.schema";

const CustomerProductionSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  material: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    default: "kg",
    required: true,
  },
  paymentDetails: {
    type: PaymentInfoSchema,
    required: true,
  },
});

export default mongoose.model("CustomerProduction", CustomerProductionSchema);
