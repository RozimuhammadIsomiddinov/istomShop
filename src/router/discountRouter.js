const express = require("express");
const getDiscount = require("../controllers/discount");

/**
 * @swagger
 * components:
 *   schemas:
 *     DiscountProduct:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Product ID
 *         title:
 *           type: string
 *           description: Product title
 *         subtitle:
 *           type: string
 *           description: Product subtitle
 *         image:
 *           type: array
 *           items:
 *             type: string
 *           description: Array of product images
 *         cost:
 *           type: number
 *           format: float
 *           description: Product cost
 *         description:
 *           type: string
 *           description: Product description
 *         category_id:
 *           type: integer
 *           description: ID of the category the product belongs to
 *         isdiscount:
 *           type: boolean
 *           description: Indicates if the product is discounted
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp of when the product was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp of when the product was last updated
 */

const router = express.Router();

/**
 * @swagger
 * /discount-products:
 *   get:
 *     summary: Get all discounted products
 *     tags: [Discount]
 *     parameters:
 *       - name: page
 *         in: query
 *         description: Page number for pagination
 *         required: false
 *         schema:
 *           type: integer
 *           default: 1
 *       - name: pageSize
 *         in: query
 *         description: Number of products per page
 *         required: false
 *         schema:
 *           type: integer
 *           default: 5
 *     responses:
 *       200:
 *         description: A list of discounted products
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 discountProducts:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/DiscountProduct'
 *                 count:
 *                   type: integer
 *                   description: Total number of discounted products
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.get("/discount-products", getDiscount);

module.exports = router;
