import mongoose from "mongoose";

const PaymentInfoSchema = new mongoose.Schema({
  totalAmount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    default: "INR",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  paidAmount: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  metadata: {
    type: Object,
    default: null,
  },
});

export default PaymentInfoSchema;
