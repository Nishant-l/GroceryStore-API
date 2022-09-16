const express = require('express');
const port = 8081;

//db connection
const db = require('./config/mongoose');

const app = express();

app.use(express.json());

//db Schamas
const Customer = require('./models/customer');
const Product = require('./models/product');

// EndPoints

app.get('/', (req, res)=>{ //TestEndPoint
    console.log(req.body)
    res.send('hellow')
})

//endpoint to Create New Customer
app.post('/customer', async (req, res) => {

    console.log(req.body) //TODO
    const cust = await Customer.create({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
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
})


//Endpoint To create new Product



app.listen(port, (err)=>{
    if(err) console.log('error occured while starting server');
    console.log(`server running on http://localhost:${port}`)
})