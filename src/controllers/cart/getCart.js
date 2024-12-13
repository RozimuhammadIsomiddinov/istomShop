const Cart = require("../../data/models/cart");

const getAll = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;
    const offset = (page - 1) * pageSize;

    const result = await Cart.findAll({
      limit: pageSize,
      offset,
    });

    if (!result || result.length === 0) {
      return res.status(404).json({ message: "Cart has not yet been added" });
    }

    res.status(200).json({ result });
  } catch (err) {
    res.status(400).json({
      message: "Error from getAllCart controller",
      error: err.message,
    });
  }
};

module.exports = getAll;
