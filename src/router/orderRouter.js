const express = require("express");
const postOrder = require("../controllers/order");

/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       required:
 *         - name
 *         - phone
 *         - email
 *         - product_id
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the order
 *         name:
 *           type: string
 *           description: The name of the customer
 *         phone:
 *           type: string
 *           description: The phone number of the customer
 *         email:
 *           type: string
 *           description: The email of the customer
 *         product_id:
 *           type: integer
 *           description: The id of the product being ordered
 *         quantity:
 *           type: integer
 *           description: The quantity of the product being ordered
 *           default: 1
 */

const router = express.Router();

/**
 * @swagger
 * /order/{id}:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The product id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - phone
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               email:
 *                 type: string
 *               quantity:
 *                 type: integer
 *     responses:
 *       201:
 *         description: The order was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       400:
 *         description: Some server error
 *       404:
 *         description: Missing required fields
 */
router.post("/order/:id", postOrder);

module.exports = router;
