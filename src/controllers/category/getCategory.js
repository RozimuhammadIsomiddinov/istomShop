const Category = require("../../data/models/category");

const getCategory = async (req, res) => {
  try {
    const result = await Category.findAll();
    if (result.length == 0) {
      return res.status(404).json({ message: "Category not found!" });
    }
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({
      message: "Error from getCategory controller",
      error: err.message,
    });
  }
};
module.exports = getCategory;
