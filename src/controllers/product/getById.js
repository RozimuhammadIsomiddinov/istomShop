const Product = require("../../data/models/product");

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Product.findByPk(id);
    if (!result)
      return res.status(404).json({ message: "product item has not yet" });

    await result.update({ seen: (result.seen || 0) + 1 });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({
      message: "Error from GetByid controller",
      error: err.message,
    });
  }
};

module.exports = getById;
