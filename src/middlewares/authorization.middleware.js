const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

// Models
const User = require("../models/user.model");

const protectRoute = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get Token from Header
      token = req.headers.authorization.split(" ")[1];

      // Verify Token
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

      // Get User from the Token
      req.user = await User.findById(decodedToken.id).select("-password");

      next();
    } catch (err) {
      console.log(
        "Authorization DENIED: ".brightRed.underline +
          err.message.brightRed.underline
      );
      res.status(401);
      throw new Error("Authorization DENIED");
    }
  }

  if (!token) {
    res.status(401);
    console.log("Authorization DENIED: No Token".brightRed.underline);
    throw new Error("Auth Token NOT found");
  }
});

module.exports = {
  protectRoute,
};
