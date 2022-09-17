const express = require('express');
const router = express.Router();

//controller
const customerController = require('../../../../controller/v1/customer/customer_controller')


//endpoint to Create New Customer
router.post('/', customerController.createCustomer)

module.exports = router;