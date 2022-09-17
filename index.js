const express = require('express');
const port = 8081;

//db connection
const db = require('./config/mongoose');

const app = express();

app.use(express.json());

//db Schamas
// const Customer = require('./models/customer');
// const Product = require('./models/product');


//Controllers
const customerController = require('./controller/v1/customer/customer_controller');
const productController =  require('./controller/v1/product/product_controller');


//Router
app.use('/', require('./routes'))


// EndPoints

app.get('/', (req, res)=>{ //TestEndPoint
    console.log(req.body)
    res.send('hellow')
})


app.listen(port, (err)=>{
    if(err) console.log('error occured while starting server');
    console.log(`server running on http://localhost:${port}`)
})