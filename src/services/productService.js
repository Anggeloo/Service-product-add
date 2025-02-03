const productModel = require('../models/productModel');

exports.createProduct = async (product) => {
    return await productModel.addProduct(product);
};