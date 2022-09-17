const express = require('express');
const router = express.Router();

//getting controller
const productController = require('../../../../controller/v1/product/product_controller');

//Endpoint To create new Product
router.post('/', productController.createProduct)


//Endpoint To create Change product price
router.patch('/', productController.updateProductPrice);

module.exports = router;