const express = require("express");
const bcrypt = require("bcryptjs");
const LoginModel = require("../database");
const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const loginDetails = await LoginModel.findOne({ email });

    if (!loginDetails) {
      return res.status(200).json({
        message: "User doesn't exist, Check Entered Credentials",
        alertMsg: "warning",
      });
    }

    const hashedPassword = loginDetails.hashedPassword;

    // Compare the provided password with the hashed password from the database
    const passwordMatch = await bcrypt.compare(password, hashedPassword);

    if (passwordMatch) {
      return res.status(200).json({
        message: "You have logged in!!",
        alertMsg: "success",
      });
    } else {
      return res.status(200).json({
        message: "Please Check Password!!",
        alertMsg: "warning",
      });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
