import mongoose from "mongoose";

const perfumeSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  tags: [String],
  occasion: [String],
});

export default mongoose.model("Perfume", perfumeSchema);
