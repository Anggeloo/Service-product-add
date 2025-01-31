const productRepository = require('../repository/productRepository');
const Product = require('../models/Product');

const createProduct = async ({ name, description, category, material, color, price }) => {
    const totalProducts = await productRepository.countProducts();
    const product_code = `PRO_${totalProducts + 1}`;

    const newProduct = new Product(product_code, name, description, category, material, color, price);
    
    return await await productRepository.saveProduct(newProduct);
};

module.exports = { createProduct };