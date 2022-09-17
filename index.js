const express = require('express');
const port = 8081;

//db connection
const db = require('./config/mongoose');

const app = express();

app.use(express.json());

//db Schamas
const Customer = require('./models/customer');
// const Product = require('./models/product');
// const Order = require('./models/order');

app.post('/allCustomer', async (req,res)=>{
    const {pageOffset, pageLimit} = req.body;
    if(pageOffset<=0) return res.send({
        error:'page offset out of limit',
        message: 'page offset start from 1'
    })
    console.log(pageOffset, pageLimit)
    const options ={
        page: parseInt(pageOffset),
        limit: parseInt(pageLimit)
    }
    const mon = await Customer.paginate({ }, options);

    return res.json(mon)

    // return res.send('')
})

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