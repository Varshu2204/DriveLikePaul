// backend/routes/cars.js
const express = require("express");
const router = express.Router();

const cars = [
  { brand: "Lamborghini", model: "Aventador", price: 417000 },
  { brand: "Ferrari", model: "SF90", price: 507000 },
  { brand: "Bugatti", model: "Chiron", price: 3300000 },
  { brand: "McLaren", model: "720S", price: 299000 },
  { brand: "Porsche", model: "911 Turbo S", price: 207000 },
];

router.get("/", (req, res) => {
  res.json(cars);
});

module.exports = router;
