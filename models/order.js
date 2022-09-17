const mongoose = require('mongoose');

const orderSchama = new mongoose.Schema({
    productList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products',
        required: true
    }],
    totalPrise:{
        type: Number,
        required: true
    },
    paymentInfo: {
        type:{
            paymentType:{
                type: String,
                required: true
            }
        }
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customers"
    }
},{
    timestamps: true
});

const Order = mongoose.model('Orders', orderSchama);

module.exports = Order;

