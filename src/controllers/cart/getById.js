const Cart = require("../../data/models/cart");

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const cartItem = await Cart.findByPk(id);
    if (!cartItem)
      return res.status(404).json({ message: "cart item has not yet" });
    res.status(200).json(cartItem.dataValues);
  } catch (err) {
    res.status(400).json({
      message: "Error from GetByid controller",
      error: err.message,
    });
  }
};

module.exports = getById;
