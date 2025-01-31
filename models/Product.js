class Product {
    constructor(product_code, name, description, category, material, color, price) {
        this.product_code = product_code;
        this.name = name;
        this.description = description;
        this.category = category;
        this.material = material;
        this.color = color;
        this.price = price;
    }
}

module.exports = Product;