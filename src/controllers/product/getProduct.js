const Category = require("../../data/models/category");
const Product = require("../../data/models/product");

const getProducts = async (req, res) => {
  try {
    (page = 1), (pageSize = 5);

    const result1 = await Product.findAll();
    const offset = (page - 1) * pageSize;

    const result = await Product.findAll({
      limit: pageSize,
      offset,
    });
    if (result.length == 0) {
      return res.status(404).json({ message: "Products not found!" });
    }

    res.status(200).json({ result, count: result1.length });
  } catch (err) {
    res.status(400).json({
      message: "Error from getProduct controller",
      error: err.message,
    });
  }
};

module.exports = getProducts;
