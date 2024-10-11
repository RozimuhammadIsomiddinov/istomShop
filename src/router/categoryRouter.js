const express = require("express");
const getCategory = require("../controllers/category/getCategory");

const router = express.Router();

router.get("/category", getCategory);
module.exports = router;
