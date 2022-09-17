const express = require('express');

const router = express.Router();

router.use('/product', require('./product'));

router.use('/customer', require('./customer'));


module.exports = router;