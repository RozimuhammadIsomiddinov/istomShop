const Category = require("../../data/models/category");
const Product = require("../../data/models/product");

const postProduct = async (req, res) => {
  try {
    const {
      title,
      subtitle,
      cost,
      description,
      category_id,
      isdiscount,
      newcost,
    } = req.body;

    if (
      !title?.trim() ||
      !subtitle?.trim() ||
      !cost ||
      !description?.trim() ||
      !category_id
    ) {
      return res.status(400).json({ message: "You have to fill all fields" });
    }

    const categoryId = await Category.findByPk(category_id);
    if (!categoryId)
      return res
        .status(404)
        .json({ message: "This category does not exist in the table" });

    if (!req.files || req.files.length === 0) {
      return res.status(400).send("You have to upload at least 1 picture");
    }

    const imagePaths = req.files.map(
      (file) => `${process.env.BACKEND_URL}/${file?.filename}`
    );

    if (isdiscount == "true" && (!newcost || newcost >= cost)) {
      return res.status(400).json({
        message:
          "Invalid discount or new price must be less than the original price",
      });
    }

    const newProduct = await Product.create({
      title,
      subtitle,
      cost,
      description,
      category_id,
      image: imagePaths,
      isdiscount: isdiscount || false,
      newcost: isdiscount ? newcost : null,
    });

    res.status(201).json({
      message: "Product successfully added",
      newProduct,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error from postProduct controller",
      error: err.message,
    });
  }
};

module.exports = postProduct;
