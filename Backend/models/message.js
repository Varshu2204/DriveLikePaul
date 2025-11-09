// backend/models/message.js
const db = require("../database");

exports.createMessage = (name, email, message, callback) => {
  const sql = "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)";
  db.query(sql, [name, email, message], callback);
};
