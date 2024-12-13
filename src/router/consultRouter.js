const express = require("express");
const postConsult = require("../controllers/consult");

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Consult:
 *       type: object
 *       required:
 *         - name
 *         - phone
 *         - question
 *       properties:
 *         id:
 *           type: integer
 *           description: Consult ID
 *         name:
 *           type: string
 *           description: User's name
 *         phone:
 *           type: string
 *           description: User's phone number
 *         question:
 *           type: string
 *           description: User's question
 */

/**
 * @swagger
 * /consult:
 *   post:
 *     summary: Create a new consult
 *     tags: [Consult]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Consult'
 *     responses:
 *       201:
 *         description: Question successfully accepted
 *       400:
 *         description: Bad request if any required field is missing
 *       500:
 *         description: Internal server error
 */
router.post("/consult", postConsult);

module.exports = router;
