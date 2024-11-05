// Routes/users.js
const express = require("express");
const Product = require("../model/detailsModel");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.post("/product", protect, async (req, res) => {
  try {
    const user = new Product(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/getproduct", async (req, res) => {
  try {
    const users = await Product.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/deleteproduct/:id", async (req, res) => {
  try {
    const user = await Product.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/updateproduct/:id", async (req, res) => {
  try {
    const user = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) return res.status(404).json({ error: "User not found" });
    res.status(200).json({ message: "User updated", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
