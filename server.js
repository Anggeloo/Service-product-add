const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const productRoutes = require('./routes/productRoutes');
const swaggerDocs = require('./config/swagger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Rutas
app.use('/products', productRoutes);

// Documentación Swagger
swaggerDocs(app);

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
