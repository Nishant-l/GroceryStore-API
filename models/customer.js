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
    }
})

const Customer = mongoose.model('Customer', customerSchama);

module.exports = Customer;