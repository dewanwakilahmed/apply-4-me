const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");

const connectDB = require("./src/configs/db.config");

// Initialize App
const app = express();

// Connect to apply4me Database
connectDB();

// Serve on Home Root
app.get("/", (req, res) =>
  res.send("apply4me App API is running and is ready to process requests.")
);

// PORT
const PORT = process.env.PORT || 5000;

// Listen on PORT for Requests
app.listen(PORT, () =>
  console.log(
    `apply4me App Server is running on port ${PORT}`.brightBlue.underline
  )
);
