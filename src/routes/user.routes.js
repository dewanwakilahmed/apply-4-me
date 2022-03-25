const express = require("express");

const router = express.Router();

// Controllers
const {
  registerUser,
  loginUser,
  getAuthenticatedUser,
} = require("../controllers/user.controllers");

// Register User Route
router.post("/", registerUser);

// Login (Authenticate) User Route
router.post("/login", loginUser);

// Fetch Authenticated (Logged In) User
router.get("/", getAuthenticatedUser);

module.exports = router;
