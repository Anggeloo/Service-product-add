const ApiResponse = require('../models/ApiResponse');
const productService = require('../services/productService');

exports.createProduct = async (req, res) => {
    try {
        const product = req.body;
        const result = await productService.createProduct(product);
        res.status(201).json(ApiResponse('success', result, 'Product saved successfully'));
    } catch (err) {
        console.log(err);
        res.status(500).json(ApiResponse('error', null, 'Error saving product'));
    }
};
