const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Product API",
            version: "1.0.0",
            description: "Product API Documentation with Swagger",
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "Development server"
            }
        ]
    },
    apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log("📄 Swagger Docs disponible en: http://localhost:3000/api-docs");
};

module.exports = swaggerDocs;
