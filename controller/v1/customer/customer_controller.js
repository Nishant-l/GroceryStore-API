const Customer = require('../../../models/customer');
const Product   =  require('../../../models/product')

module.exports.createCustomer = async (req, res) => {

    console.log(req.body) //TODO
    const cust = await Customer.create({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email.toLocaleLowerCase(),
        totalSpendOnAllOrders:0
    },(err, newCustomer)=>{
        if(err){
            console.log('error occured while creating user', err)
            if(err.name == 'ValidationError'){
                return res.status(400).send({
                    errors: err.name,
                    message: err.message
                });
            }else{
                return res.status(400).send({
                    errors:'uniqueField Required',
                    message: 'needs unique email or phone'
                })
            }
        }

        return res.status(200).send({
            message: 'New Customer creted successfully',
            id: newCustomer._id
        });
    })
}

module.exports.findSpecificCustomerInfo = (req, res)=>{
    const{email, phone} = req.query;

    if(!email && !phone) return res.status(400).send({
        error:'bad request',
        message:'email or phone required in query param'
    })

    if(email!=null){
        const query = {email:email};
        Customer.findOne(query, (err, customer)=>{
            if(err){
                console.log(err);
                return res.status(500).send({
                    error:'inrenal server error',
                    message:'failed to query database'
                })
            }
            return res.status(200).send({
                email:customer.email,
                phone:customer.phone,
                id:customer.id,
                totalSpendOnAllOrders:customer.totalSpendOnAllOrders
            })
        })
    }

    else if(phone){
        const query = {phone:phone};

        Customer.findOne(query, (err, customer)=>{
            if(err){
                console.log(err);
                return res.status(500).send({
                    error:'inrenal server error',
                    message:'failed to query database'
                })
            }
            return res.status(200).send({
                email:customer.email,
                phone:customer.phone,
                id:customer.id,
                totalSpendOnAllOrders:customer.totalSpendOnAllOrders
            })
        })
    }
}
