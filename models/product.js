const mongoose = require('mongoose');

const productSchama = new mongoose.Schema({
    productCategory: {
        type: String,
        required: true
    },
    productInfo: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: String,
        required: true
    },
    quantityAvailable: {
        type: String,
        required: true
    }
})

const Product = mongoose.model('Products', productSchama);

module.exports = Product;