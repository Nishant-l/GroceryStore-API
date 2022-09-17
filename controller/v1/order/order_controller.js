const Customer = require('../../../models/customer');
const Product = require('../../../models/product');
const Order = require('../../../models/order');

module.exports.createOrder = async (req,res)=>{
    const {productList, totalPrise, paymentInfo, customerPhone} = req.body;
    const customerIdd = await Customer.findOne({phone:customerPhone});
    // console.log('_++++++++++_',customerIdd._id);
    const productIDs = [];
     for(let i = 0; i<productList.length; i++){
        const productId = await Product.findOne({productInfo: productList[i]});
        // console.log(productId.id)
        productIDs.push( productId.id);
     }
    // console.log('+++++++++++++++++',customerIdd)
    const obj = {
        productList: productIDs,
        totalPrise: totalPrise,
        "customerId": customerIdd.id,
        paymentInfo:paymentInfo
    }
    Order.create(obj, (err, newOrder)=>{
        // console.log(newOrder);
        if(err) return res.status(500).send({message:'error in creating order',err});

         Customer.findById(customerIdd._id, (err, cust)=>{
            if(err) {
                console.log(err);
                return res.status(500).send({message:'error seving order in customer'})
            }
            cust.orders.push(newOrder._id);
            cust.totalSpendOnAllOrders = cust.totalSpendOnAllOrders+newOrder.totalPrise;
            cust.save();
            return res.send(newOrder);
        })
    })
}