const productService = require('../services/productService');
const ApiResponse = require('../models/ApiResponse');

const createProduct = async (req, res) => {
    const { name, description, category, material, color, price } = req.body;

    if (!name || !price) {
        return res.status(400).json(ApiResponse('error', null, 'You must provide name and price.'));
    }

    try {
        const newProduct = await productService.createProduct({ name, description, category, material, color, price });
        res.status(201).json(ApiResponse('success', newProduct, 'Product saved successfully'));
    } catch (err) {
        console.error(err);
        res.status(500).json(ApiResponse('error', null, 'Error saving product'));
    }
};

module.exports = { createProduct };