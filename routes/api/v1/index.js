const express = require('express');

const router = express.Router();

router.use('/product', require('./product'));

router.use('/customer', require('./customer'));

router.use('/order', require('./order'))

module.exports = router;