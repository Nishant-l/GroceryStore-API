const mongoose = require('mongoose');

const customerSchama = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Orders'
        }
    ],
    totalSpendOnAllOrders: {
        type: Number
    }
})

const Customer = mongoose.model('Customer', customerSchama);

module.exports = Customer;