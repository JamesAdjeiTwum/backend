import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import perfumeRoutes from "./routes/perfumes.js";
import ordersRoutes from "./routes/orders.js";
import paystackRoutes from "./routes/paystackRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/perfumes", perfumeRoutes);
app.use("/api/orders", ordersRoutes);
app.use("/api/paystack", paystackRoutes);   // ✅ FIXED — now app exists

// MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/perfume_store")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Start server
app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
