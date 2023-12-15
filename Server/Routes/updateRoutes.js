// updateRoutes.js
const express = require("express");
const mongoose = require("mongoose");
const LoginModel = require("../database");
const router = express.Router();

router.post("/update", async (req, res) => {
  try {
    const { _id, name, email, password } = req.body;

    if (!_id || !name || !email || !password) {
      return res
        .status(400)
        .json({ error: "Please provide all required fields" });
    }

    const loginDetails = await LoginModel.findById(_id);

    if (!loginDetails) {
      return res.status(400).json({ error: "No user found with that _id" });
    }

    loginDetails.name = name;
    loginDetails.email = email;
    loginDetails.hashedPassword = bcrypt.hashSync(password, 10);

    await loginDetails.save();

    res.status(201).json({ message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
