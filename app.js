require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const animeRoutes = require("./routes/animeRoutes");
const setupSwagger = require("./swagger");

const app = express();
app.use(express.json());

// Setup Swagger dokumentasi
setupSwagger(app);

// Koneksi ke MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));

// Routes
app.use("/anime", animeRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Mini Project API",
    documentation: "/api-docs",
  });
});

// ERROR HANDLER
app.use((err, req, res, next) => {
  console.error(err);

  // mongoose validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation Error",
      errors: err.errors,
    });
  }

  // invalid ObjectId format
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
