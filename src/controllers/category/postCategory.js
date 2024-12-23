const Category = require("../../data/models/category");

const postCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!req.file) {
      return res.status(400).send("You have to upload  1 picture");
    }
    const imagePath = `${process.env.BACKEND_URL}/${req.file.filename}`;

    const category = await Category.create({
      name,
      description,
      image: imagePath,
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
