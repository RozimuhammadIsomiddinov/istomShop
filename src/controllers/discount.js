const Product = require("../data/models/product");

const getDiscount = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;

    const pageSize = parseInt(req.query.pageSize) || 5;

    const offset = (page - 1) * pageSize;
    const discountProducts = await Product.findAll({
      where: { isdiscount: true },
      limit: pageSize,
      offset,
    });
    const discountProducts1 = await Product.findAll({
      where: { isdiscount: true },
    });
    res.status(200).json({ discountProducts, count: discountProducts1.length });
  } catch (err) {
    res.status(400).json({
      message: "Error from getDiscount controller",
      error: err.message,
    });
  }
};

module.exports = getDiscount;
