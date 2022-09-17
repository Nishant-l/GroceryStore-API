const mongoose = require('mongoose');
const mongoosePeginate = require('mongoose-paginate');

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

customerSchama.plugin(mongoosePeginate);

const Customer = mongoose.model('Customer', customerSchama);

module.exports = Customer;