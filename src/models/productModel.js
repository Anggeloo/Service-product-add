const db = require('../db/db');

const addProduct = async (product) => {
    const { name, description, category, material, color, price } = product;

    if (!name || !price) {
        return { error: 'You must provide code, name and price.' };
    }

    const countQuery = 'SELECT COUNT(*) FROM product';
    const countResult = await db.query(countQuery);

    const totalProducts = Number(countResult.rows[0].count) + 1;

    const query = `
        INSERT INTO product (
          product_code, name, description, category, material, color, price
        ) 
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *;
      `;

    const params = [
        `PRO_${totalProducts}`, name, description, category, material, color, price
    ];

    const result = await db.query(query, params);

    return result.rows[0];
}

module.exports = { addProduct };