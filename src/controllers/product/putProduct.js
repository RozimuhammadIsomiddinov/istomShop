const Category = require("../../data/models/category");
const Product = require("../../data/models/product");

const putProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      subtitle,
      cost,
      description,
      category_id,
      isdiscount,
      newcost,
    } = req.body;

    if (!id) {
      return res.status(400).json({ message: "Product ID is required" });
    }

    if (!title || !subtitle || !cost || !description || !category_id) {
      return res.status(400).json({ message: "You have to fill all fields" });
    }

    const categoryId = await Category.findByPk(category_id);
    if (!categoryId) {
      return res.status(404).json({ message: "This category does not exist" });
    }

    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    let imagePaths = product.image;
    if (req.files && req.files.length > 0) {
      imagePaths = req.files.map(
        (file) => `${process.env.BACKEND_URL}/${file.filename}`
      );
    }

    if (isdiscount && (!newcost || newcost >= cost)) {
      return res.status(400).json({
        message:
          "Invalid discount or new price must be less than the original price",
      });
    }

    const [updateCount, updatedProducts] = await Product.update(
      {
        title,
        subtitle,
        cost,
        description,
        category_id,
        image: imagePaths,
        isdiscount,
        newcost: isdiscount ? newcost : null,
      },
      {
        where: { id },
        returning: true,
      }
    );

    res.status(200).json({
      message: "Product successfully updated",
      updatedProduct: updatedProducts[0],
    });
  } catch (err) {
    res.status(400).json({
      message: "Error from putProduct controller",
      error: err.message,
    });
  }
};

module.exports = putProduct;
