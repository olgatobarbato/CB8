const productsData = require("../models/products.json");

const getAllProducts = () => {
  return productsData;
};

const getProductsByCategory = (category) => {
  return productsData.filter((prodotto) => prodotto.category === category);
};

module.exports = {
  getAllProducts,
  getProductsByCategory,
};
