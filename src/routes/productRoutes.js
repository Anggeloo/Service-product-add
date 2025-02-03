const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

/**
 * @swagger
 * /products/add :
 *   post:
 *     summary: Create a new product
 *     tags: [Product add]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *               material:
 *                 type: string
 *               color:
 *                 type: string
 *               price:
 *                 type: number
 *                 format: float
 *     responses:
 *       201:
 *         description: Product saved successfully
 */
router.post('/products/add', productController.createProduct);

module.exports = router;