
const productService = require('./ProductService');

const getAllProducts = async () => {
    return await productService.getAllProducts();
}

module.exports = { getAllProducts };