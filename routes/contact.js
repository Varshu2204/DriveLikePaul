// backend/routes/contact.js
const express = require("express");
const router = express.Router();
const Message = require("../models/message");

// POST route for saving contact messages
router.post("/", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  Message.createMessage(name, email, message, (err, result) => {
    if (err) {
      console.error("❌ Database error:", err);
      return res.status(500).json({ error: "Database error" });
    }

    // ✅ Success log in terminal
    console.log("✅ New message saved:", { name, email });

    res.json({ message: "Message sent successfully!" });
  });
});

module.exports = router;
