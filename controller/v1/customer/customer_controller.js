const Customer = require('../../../models/customer');
const Product   =  require('../../../models/product')

module.exports.createCustomer = async (req, res) => {

    console.log(req.body) //TODO
    const cust = await Customer.create({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email.toLocaleLowerCase()
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

