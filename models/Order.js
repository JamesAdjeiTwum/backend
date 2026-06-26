import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    address: String,
    email: String,
    amount: Number,
    reference: String,
    status: String,
    items: Array,
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
