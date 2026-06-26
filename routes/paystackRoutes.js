import express from "express";
import axios from "axios";
import Order from "../models/Order.js";

const router = express.Router();

router.get("/verify/:reference", async (req, res) => {
  const { reference } = req.params;

  try {
    const response = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      }
    );

    const data = response.data.data;

    await Order.create({
      name: req.query.name,
      phone: req.query.phone,
      address: req.query.address,
      items: JSON.parse(req.query.items),
      amount: data.amount / 100,
      reference: data.reference,
      status: data.status,
    });

    res.json({ success: true, data });
  } catch (error) {
    console.log("Verification error:", error.response?.data);
    res.status(400).json({ success: false, error: error.response?.data });
  }
});

export default router;

