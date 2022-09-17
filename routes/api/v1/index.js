const express = require('express');
const router = express.Router();

//controller
const customerController = require('../../../controller/v1/customer/customer_controller')

router.use('/product', require('./product'));

router.use('/customer', require('./customer'));

router.use('/order', require('./order'))

router.post('/allCustomer', customerController.getAllCustomer);

module.exports = router;