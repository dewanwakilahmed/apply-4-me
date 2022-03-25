const jwt = require("jsonwebtoken");

// Generate JWT
const generateJWT = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "8h" });
};

module.exports = {
  generateJWT,
};
