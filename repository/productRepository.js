const pool = require('../db/db');

const createProduct = async (product) => {
  const { name, description, category, material, color, price } = product;

  const countQuery = 'SELECT COUNT(*) FROM products';
  const countResult = await pool.query(countQuery);

  const totalProducts = Number(countResult.rows[0].count) + 1;

  const query = `
    INSERT INTO products (
      product_code, name, name, description, category, material, color, price
    ) 
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;
  `;

  const params = [
    `PRO_${totalProducts}`,
    name,
    description,
    category,
    material,
    color,
    price,
  ];

  const result = await pool.query(query, params);
  return result.rows[0];
};

module.exports = {
  createProduct,
};