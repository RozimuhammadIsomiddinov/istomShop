const Consult = require("../data/models/consult");

const postConsult = async (req, res) => {
  try {
    const { name, phone, question } = req.body;
    if (!name || !phone || !question)
      return res.status(400).json({ message: "you have to fill all field" });
    await Consult.create({
      name,
      phone,
      question,
    });
    res.status(201).json({ message: "your question successfully excepted" });
  } catch (err) {
    res.status(400).json({
      message: "Error from postConsult controller",
      error: err.message,
    });
  }
};

module.exports = postConsult;
