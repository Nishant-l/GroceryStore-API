const express = require('express');
const router = express.Router();

const orderController = require('../../../../controller/v1/order/order_controller')

router.post('/', orderController.createOrder)

module.exports = router;