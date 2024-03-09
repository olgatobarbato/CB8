const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductsByCategory,
} = require("../../controllers/productsController");

router.get("/", (req, res) => {
  const products = getAllProducts();
  res.render("products", { title: "All T-shirts", products });
});

router.get("/uomo", (req, res) => {
  const products = getProductsByCategory("uomo");
  res.render("products", { title: "Man", products });
});

router.get("/donna", (req, res) => {
  const products = getProductsByCategory("donna");
  res.render("products", { title: "Woman", products });
});

router.get("/bambino", (req, res) => {
  const products = getProductsByCategory("bambino");
  res.render("products", { title: "Child", products });
});

module.exports = router;
