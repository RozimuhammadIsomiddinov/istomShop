const Partner = require("../../data/models/partner");

const getPartner = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;
    const offset = (page - 1) * pageSize;
    const result = await Partner.findAll({ limit: pageSize, offset });
    if (result.length == 0) {
      return res.status(404).json({ message: "Category not found!" });
    }
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({
      message: "Error from getPartner controller",
      error: err.message,
    });
  }
};
module.exports = getPartner;
