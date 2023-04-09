const express = require('express');
const router = express.Router();

const productController = require('../../components/product/ProductController');
// http://localhost:3000/cpanel/product
// hien thi danh sách san pham
router.get('/', async function(res, req, next)  {
    const products = await productController.getAllProducts();
    res.render('product/list', { products });
});

module.exports = router;