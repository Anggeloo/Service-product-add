const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db/db');
const ApiResponse = require('./models/ApiResponse');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/products', async (req, res) => {
  const { nombre, descripcion, categoria, material, color, precio } = req.body;

  if (!nombre || !precio) {
    return res.status(400).json(ApiResponse('error', null, 'Debe proporcionar código, nombre y precio.'));
  }

  try {

    const countQuery = 'SELECT COUNT(*) FROM productos';
    const countResult = await pool.query(countQuery);

    const totalProducts = Number(countResult.rows[0].count) + 1;
  
    const query = `
      INSERT INTO productos (
        codigo_producto, nombre, descripcion, categoria, material, color, precio
      ) 
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `;

    const params = [
      `PRO_${totalProducts}`, nombre, descripcion, categoria, material, color, precio
    ];

    const result = await pool.query(query, params);

    res.status(201).json(ApiResponse('success', result.rows[0], 'Producto guardado exitosamente'));
  } catch (err) {
    console.log(err);
    res.status(500).json(ApiResponse('error', null, 'Error al guardar el producto'));
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
