import mongoose from "mongoose";

const perfumeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: String,
  description: String,
  price: Number,
  image: String,
  notes: {
    top: [String],
    heart: [String],
    base: [String],
  },
  gender: { type: String, enum: ["male", "female", "unisex"] },
  occasion: [String],
  longevity: Number,
  sillage: Number,
  tags: [String],
});

export default mongoose.model("Perfume", perfumeSchema);
