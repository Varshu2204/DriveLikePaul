// backend/server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./database"); // MySQL connection
const authRoutes = require("./routes/auth");
const contactRoutes = require("./routes/contact");
const carRoutes = require("./routes/cars"); // 👈 1. IMPORT THE NEW ROUTE

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);      // for signup/login
app.use("/api/contact", contactRoutes); // for contact form
app.use("/api/cars", carRoutes);        // 👈 2. USE THE NEW ROUTE

// Root route (optional)
app.get("/", (req, res) => {
  res.send("✅ Backend Server is running successfully!");
});

// MySQL connection check (optional)
db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
  } else {
    console.log("✅ MySQL Database connected successfully on port 3306!");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
