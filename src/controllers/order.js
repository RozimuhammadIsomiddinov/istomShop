const Order = require("../data/models/order");
const Product = require("../data/models/product");

const postOrder = async (req, res) => {
  try {
    const { id } = req.params; // product id

    const { name, phone, email, quantity } = req.body;

    if (!name || !phone || !email)
      return res.status(404).json({ message: "You have to fill all fields" });

    const productName = (await Product.findByPk(id)).dataValues.title;

    console.log(productName);
    const cartItem = await Order.create({
      name,
      phone,
      email,
      product_id: id,
      quantity: quantity || 1,
    });

    res.status(201).json({ message: "Product added to order", cartItem });
  } catch (err) {
    res.status(400).json({
      message: "Error from postOrder controller",
      error: err.message,
    });
  }
};

module.exports = postOrder;
