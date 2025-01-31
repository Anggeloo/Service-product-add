const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product management endpoints
 */

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - price
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Dell Laptop"
 *               description:
 *                 type: string
 *                 example: "High-end laptop"
 *               category:
 *                 type: string
 *                 example: "Technology"
 *               material:
 *                 type: string
 *                 example: "Metal"
 *               color:
 *                 type: string
 *                 example: "Black"
 *               price:
 *                 type: number
 *                 example: 1200.50
 *     responses:
 *       201:
 *         description: Product successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 data:
 *                   type: object
 *                 message:
 *                   type: string
 *                   example: "Product successfully saved"
 *       400:
 *         description: Missing required fields in the request
 *       500:
 *         description: Server error
 */
router.post('/', productController.createProduct);

module.exports = router;
