const express = require("express");
const getCategory = require("../controllers/category/getCategory");
const upload = require("../middleware/multer");
const postCategory = require("../controllers/category/postCategory");

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: integer
 *           description: Category ID
 *         name:
 *           type: string
 *           description: Category name
 *         description:
 *           type: string
 *           description: Category description
 *         image:
 *           type: string
 *           format: binary
 *           description: Category image
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date category was added
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date category was last updated
 */

/**
 * @swagger
 * /category:
 *   get:
 *     summary: Get all categories
 *     tags: [Category]
 *     responses:
 *       200:
 *         description: A list of categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 *       404:
 *         description: No categories found
 *       500:
 *         description: Internal server error
 */
router.get("/category", getCategory);

/**
 * @swagger
 * /add-category:
 *   post:
 *     summary: Create a new category
 *     tags: [Category]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       201:
 *         description: Category created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/add-category", upload.single("image"), postCategory);

module.exports = router;
