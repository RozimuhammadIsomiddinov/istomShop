const Product = require("../../data/models/product");

const getProducts = async (req, res) => {
  try {
    const result = await Product.findAll();
    if (result.length == 0) {
      return res.status(404).json({ message: "Products not found!" });
    }
    res.status(200).json(result);
  } catch (err) {
    res
      .status(400)
      .json({
        message: "Error from getProduct controller",
        error: err.message,
      });
  }
};

module.exports = getProducts;
