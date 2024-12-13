const express = require("express");
const getAll = require("../controllers/cart/getCart");
const getById = require("../controllers/cart/getById");
const postCart = require("../controllers/cart/postCart");
const deleteCart = require("../controllers/cart/deleteCart");

/**
 * @swagger
 * components:
 *   schemas:
 *     CartItem:
 *       type: object
 *       required:
 *         - product_id
 *       properties:
 *         id:
 *           type: integer
 *           description: Cart item ID
 *         product_id:
 *           type: integer
 *           description: Product ID in the cart
 *         quantity:
 *           type: integer
 *           description: Quantity of the product
 *         added_time:
 *           type: string
 *           format: date-time
 *           description: Time when the item was added to the cart
 */
const router = express.Router();

/**
 * @swagger
 * /cart:
 *   get:
 *     summary: Get all items in the cart
 *     tags: [Cart]
 *     responses:
 *       200:
 *         description: A list of items in the cart
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CartItem'
 *       404:
 *         description: No items found
 *       500:
 *         description: Internal server error
 */
router.get("/cart", getAll);

/**
 * @swagger
 * /cart/{id}:
 *   get:
 *     summary: Get a cart item by ID
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the cart item to retrieve
 *     responses:
 *       200:
 *         description: A cart item
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CartItem'
 *       404:
 *         description: Item not found
 *       500:
 *         description: Internal server error
 */
router.get("/cart/:id", getById);

/**
 * @swagger
 * /add-cart/{id}:
 *   post:
 *     summary: Add a product to the cart
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the product to add to the cart
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quantity:
 *                 type: integer
 *                 description: Quantity of the product
 *     responses:
 *       201:
 *         description: Product added to the cart
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CartItem'
 *       400:
 *         description: Invalid request
 *       500:
 *         description: Internal server error
 */
router.post("/add-cart/:id", postCart);

/**
 * @swagger
 * /delete-cart/{id}:
 *   delete:
 *     summary: Delete a cart item by ID
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the cart item to delete
 *     responses:
 *       200:
 *         description: Cart item deleted
 *       404:
 *         description: Item not found
 *       500:
 *         description: Internal server error
 */
router.delete("/delete-cart/:id", deleteCart);

module.exports = router;
