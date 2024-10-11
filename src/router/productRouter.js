const express = require("express");
const getProducts = require("../controllers/product/getProduct");
const postProduct = require("../controllers/product/postProduct");
const upload = require("../middleware/multer");
const router = express.Router();

router.get("/products", getProducts);
router.post("/create-product", upload.array("image", 10), postProduct);
module.exports = router;
