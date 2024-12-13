const Cart = require("../../data/models/cart");

const deleteCart = async (req, res) => {
  const { id } = req.params;
  try {
    const cartItem = await Cart.findByPk(id);
    if (!cartItem)
      return res.status(404).json({ message: "cart item has not yet" });

    await Cart.destroy({ where: { id } });
    res
      .status(200)
      .json({ message: "your cart item has successfully deleted" });
  } catch (err) {
    res.status(400).json({
      message: "Error from deleteCart controller",
      error: err.message,
    });
  }
};

module.exports = deleteCart;
