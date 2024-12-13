const Cart = require("../../data/models/cart");
const Product = require("../../data/models/product");

const postCart = async (req, res) => {
  try {
    const { id } = req.params; // product id
    const product = await Product.findByPk(id);
    if (!product)
      return res.status(404).json({ message: "this product is not available" });

    const on_cart = Cart.findByPk(id);
    if (on_cart) {
      return res
        .status(400)
        .json({ message: "this product is already in your cart" });
    }
    const cart = await Cart.create({ product_id: product.dataValues.id });
    res
      .status(201)
      .json({ message: "your order successfully added to cart ", cart });
  } catch (err) {
    res.status(400).json({
      message: "Error from postCart controller",
      error: err.message,
    });
  }
};

module.exports = postCart;
