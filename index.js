const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");

// Configs
const connectDB = require("./src/configs/db.config");

// Routes
const userRoutes = require("./src/routes/user.routes.js");

// Middlewares
const { errorHandler } = require("./src/middlewares/errorHandler.middleware");

// Initialize App
const app = express();

// Connect to apply4me Database
connectDB();

// Initialize Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve on Home Root
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/web-app/build")));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "./", "client", "web-app", "build", "index.html")
    );
  });
} else {
  app.get("/", (req, res) =>
    res.send("apply4me App API is running and is ready to process requests.")
  );
}

// apply4me Server Routes
app.use("/api/user", userRoutes);

// Error Handler Middleware
app.use(errorHandler);

// PORT
const PORT = process.env.PORT || 5000;

// Listen on PORT for Requests
app.listen(PORT, () =>
  console.log(
    `apply4me App Server is running on port ${PORT}`.brightBlue.underline
  )
);
