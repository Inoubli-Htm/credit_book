require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRoutes = require("./routes/userRoutes");
const creditRoutes = require("./routes/creditRoutes");
const { errorHandler } = require("./middlewares/errorMiddleware"); // Correct, si le dossier est "middlewares"

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Middleware
app.use(express.json()); // To parse JSON requests

// Routes
app.use("/api/users", userRoutes);
app.use("/api/credits", creditRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
