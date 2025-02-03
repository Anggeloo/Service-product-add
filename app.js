const express = require('express');
const bodyParser = require('body-parser');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
require('dotenv').config();

const productRoutes = require('./src/routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 3001; 

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// app.use(cors(corsOptions));

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Product Add Service",
      version: "1.0.0",
    },
  },
  apis: ['./src/routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/swagger-product-add', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.get('/swagger.json', (req, res) => {
  res.json(swaggerDocs);
});

app.use('/', productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Swagger on http://localhost:${PORT}/swagger-product-add`);
  console.log(`Swagger JSON on http://localhost:${PORT}/swagger.json`);
});
