// const User = require("../Models/model");
const { User, Message } = require("../Models/model");
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
      return res.status(409).json({
        message: "The Email is already exists and Please click to login now",
      });
    }

    const newUser = new User({ name, email, password: hashPassword });
    await newUser.save();
    res.status(201).json({
      message: "User registered successfully! and Please click to login now",
    });
  } catch {
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ id: user._id, email: user.email }, "mysecret", {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (err) {
    console.error("Login error:", err.message); // log error
    res.status(500).json({ message: "Internal server error" });
  }
});
router.post("/message", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const mg = new Message({ name, email, message });
    await mg.save();
    res.status(201).json({ message: "Message saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
