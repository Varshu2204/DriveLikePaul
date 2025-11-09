// backend/models/user.js
const db = require("../database");

exports.createUser = (email, password, callback) => {
  const sql = "INSERT INTO users (email, password) VALUES (?, ?)";
  db.query(sql, [email, password], callback);
};

exports.findUserByEmail = (email, callback) => {
  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], callback);
};
