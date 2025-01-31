const productRepository = require('../repository/productRepository');
const ApiResponse = require('../models/ApiResponse');

const createProduct = async (product) => {
  try {
    const newProduct = await productRepository.createProduct(product);
    return new ApiResponse('success', newProduct, 'Product successfully saved');
  } catch (err) {
    console.error(err);
    throw new Error('Error saving product');
  }
};

module.exports = {
  createProduct,
};