const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

// Models
const User = require("../models/user.model");

// Utils
const { generateJWT } = require("../utils/generateJWT.util");

// @desc    Fetch Authenticated User
// @route   GET api/user
// @access  Private
const getAuthenticatedUser = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

// @desc    Register User
// @route   POST api/user/
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Check Required Fields
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all required fields");
  }

  // Check if Email is already taken
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("Email is already taken");
  }

  // Hash Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create User
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    console.log(
      `User Registration SUCCESSFUL. Name:${user.name} Email:${user.email}`
        .brightGreen.underline
    );

    res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
      token: generateJWT(user.id),
    });
  } else {
    res.status(400);
    console.log("ERROR: User Registration UNSUCCESFUL".brightRed.underline);
    throw new Error("Please try again with valid user data");
  }
});

// @desc    Login (Authenticate) User
// @route   POST api/user/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check for Required Fields
  if (!email || !password) {
    res.status(400);
    throw new Error("Please add all required fields");
  }

  // Check if User Exists
  const user = await User.findOne({ email });

  // Verify Password & Authenticate
  if (user) {
    const isPasswordVerified = await bcrypt.compare(password, user.password);

    if (isPasswordVerified) {
      console.log(
        `User Authentication SUCCESSFUL. Name:${user.name} Email:${user.email}`
          .brightGreen.underline
      );

      res.status(201).json({
        id: user.id,
        name: user.name,
        email: user.email,
        token: generateJWT(user.id),
      });
    } else {
      res.status(400);
      console.log(
        "ERROR: User Authentication UNSUCCESSFUL".brightRed.underline
      );
      throw new Error("Invalid Credentials");
    }
  } else {
    res.status(400);
    console.log("ERROR: User Authentication UNSUCCESSFUL".brightRed.underline);
    throw new Error("Invalid Credentials");
  }
});

module.exports = {
  registerUser,
  loginUser,
  getAuthenticatedUser,
};
