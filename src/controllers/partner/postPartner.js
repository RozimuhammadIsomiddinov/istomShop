const Partner = require("../../data/models/partner");

const postPartner = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!req.file) {
      return res.status(400).send("You have to upload  1 picture");
    }
    const imagePath = `${process.env.BACKEND_URL}/${req.file.filename}`;

    const category = await Partner.create({
      name,
      description,
      image: imagePath,
    });
    res.status(201).json({ message: "Partner successfully added\n", category });
  } catch (err) {
    res.status(400).json({
      message: "Error from postPartner controller",
      error: err.message,
    });
  }
};
module.exports = postPartner;
