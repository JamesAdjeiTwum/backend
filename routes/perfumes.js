console.log("Perfume routes LOADED");


import express from "express";
import Perfume from "../models/Perfume.js";

const router = express.Router();

// Get all perfumes
router.get("/", async (req, res) => {
  const perfumes = await Perfume.find();
  res.json(perfumes);
});

// Seed perfumes
router.post("/seed", async (req, res) => {
  await Perfume.deleteMany({});

  const data = [
    {
      name: "Rose Bloom",
      description: "Soft floral scent with fresh rose petals.",
      price: 120,
      image: "rose.png",
      tags: ["floral", "romantic"],
      occasion: ["evening"],
    },
    {
      name: "Oud Majesty",
      description: "Deep smoky oud with warm amber.",
      price: 180,
      image: "oud.png",
      tags: ["oud", "luxury"],
      occasion: ["special"],
    },
  ];

  const perfumes = await Perfume.insertMany(data);
  res.json(perfumes);
});

export default router;
