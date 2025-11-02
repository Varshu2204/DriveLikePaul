// backend/database.js
const mysql = require("mysql2");

// ✅ Update with your MySQL credentials
const db = mysql.createConnection({
  host: "localhost",
  user: "root",          // your MySQL username
  password: "Varshu@123",          // put your MySQL password if you set one
  database: "drivelikepaul",
  port: 3306             // 👈 your MySQL port
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
  } else {
    console.log("✅ MySQL Database connected successfully on port 3306!");
  }
});

module.exports = db;
