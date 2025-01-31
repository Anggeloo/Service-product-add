const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Crea un nuevo producto
 *     description: Crea un nuevo producto en la base de datos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre del producto
 *                 example: "Camiseta"
 *               descripcion:
 *                 type: string
 *                 description: Descripción del producto
 *                 example: "Camiseta de algodón"
 *               categoria:
 *                 type: string
 *                 description: Categoría del producto
 *                 example: "Ropa"
 *               material:
 *                 type: string
 *                 description: Material del producto
 *                 example: "Algodón"
 *               color:
 *                 type: string
 *                 description: Color del producto
 *                 example: "Azul"
 *               precio:
 *                 type: number
 *                 description: Precio del producto
 *                 example: 19.99
 *     responses:
 *       201:
 *         description: Producto creado exitosamente
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
 *                   properties:
 *                     codigo_producto:
 *                       type: string
 *                       example: "PRO_1"
 *                     nombre:
 *                       type: string
 *                       example: "Camiseta"
 *                     descripcion:
 *                       type: string
 *                       example: "Camiseta de algodón"
 *                     categoria:
 *                       type: string
 *                       example: "Ropa"
 *                     material:
 *                       type: string
 *                       example: "Algodón"
 *                     color:
 *                       type: string
 *                       example: "Azul"
 *                     precio:
 *                       type: number
 *                       example: 19.99
 *                 message:
 *                   type: string
 *                   example: "Producto guardado exitosamente"
 *       400:
 *         description: Faltan campos obligatorios
 *       500:
 *         description: Error al guardar el producto
 */
router.post('/products', productController.createProduct);

module.exports = router;