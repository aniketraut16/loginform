// loginRoutes.js
const express = require("express");
const bcrypt = require("bcryptjs");
const LoginModel = require("../database");
const router = express.Router();

function validateName(name) {
  const namePattern = /^[A-Za-z]+$/;
  if (name.trim() === "") {
    return "Name is required.";
  } else if (!namePattern.test(name)) {
    return "Name should contain only letters.";
  } else {
    return "";
  }
}

function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email.trim() === "") {
    return "Email is required.";
  } else if (!emailPattern.test(email)) {
    return "Please enter a valid email address.";
  } else {
    return "";
  }
}

function validatePassword(password) {
  const minLength = 8;
  const hasLetters = /[a-zA-Z]/.test(password);
  const hasNumbers = /\d/.test(password);

  if (password.trim() === "") {
    return "Password is required.";
  } else if (password.length < minLength) {
    return `Password should be at least ${minLength} characters long.`;
  } else if (!(hasLetters && hasNumbers)) {
    return "Password should contain both letters and numbers.";
  } else {
    return "";
  }
}

router.post("/signin", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (validateName(name) !== "") {
      return res
        .status(200)
        .json({ message: validateName(name), alertMsg: "warning" });
    }
    if (validateEmail(email) !== "") {
      return res
        .status(200)
        .json({ message: validateEmail(email), alertMsg: "warning" });
    }
    if (validatePassword(password) !== "") {
      return res
        .status(200)
        .json({ message: validatePassword(password), alertMsg: "warning" });
    }

    const loginDetails = await LoginModel.findOne({ email });

    if (loginDetails) {
      return res
        .status(200)
        .json({ message: "User already exists", alertMsg: "warning" });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const newLogin = new LoginModel({
      name,
      email,
      hashedPassword,
    });

    await newLogin.save();

    res
      .status(201)
      .json({ message: "Login data saved successfully", alertMsg: "success" });
  } catch (error) {
    console.error("Error saving login data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
