// indexRoutes.js
const express = require("express");
const LoginModel = require("../database");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const loginDetails = await LoginModel.find();

    res.status(200).json(loginDetails);
  } catch (error) {
    console.error("Error fetching login details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
