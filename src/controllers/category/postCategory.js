const Category = require("../../data/models/category");

const postCategory = async (req, res) => {
  try {
    const { name, description, isAdmin } = req.body;
    isAdmin = isAdmin || false;
    if (!isAdmin) return res.status(400).json({ message: "you're not admin" });

    const category = await Category.create({
      name,
      description,
    });
    res
      .status(201)
      .json({ message: "Category successfully added\n", category });
  } catch (err) {
    res.status(400).json({
      message: "Error from postCategory controller",
      error: err.message,
    });
  }
};
module.exports = postCategory;
