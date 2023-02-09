import mongoose from "mongoose";

const ProductionSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },
  inputQuantity: {
    type: Number,
    required: true,
  },
  inputUnit: {
    type: String,
    required: true,
    default: "kg",
  },
  outputQuantity: {
    type: Number,
    required: true,
  },
  outputUnit: {
    type: String,
    required: true,
    default: "kg",
  },
});

export default mongoose.model("Production", ProductionSchema);
