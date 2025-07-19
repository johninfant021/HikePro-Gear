const User = require("../Models/model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const express = require("express");
const router = express.Router();
const authMiddleware = require("../Middleware/auth");

router.post("/reg", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "The Email is already exists and Please click to login now" });
    }

    const newUser = new User({ name, email, password: hashPassword });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully! and Please click to login now" });
  } catch {
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});
module.exports=router