const Customer = require('../../../models/customer');
const Product = require('../../../models/product')

module.exports.createProduct = (req, res)=>{
    console.log(req.body);
    const {productCategory, productInfo, price, quantityAvailable} = req.body;
    Product.create({
        productCategory: productCategory.toLocaleLowerCase(),
        productInfo: productInfo.toLocaleLowerCase(),
        price: price,
        quantityAvailable: quantityAvailable
    }, (err, newProduct)=>{
        if(err){
            console.log(err);
            return res.status(400).send({
                errors: "uniqueField Required",
                message:"productInfo should be unique, Give Product info Alredy Exist"
            });
        }

        return res.status(200).send({
            message:'Product created successfully',
            id: newProduct._id
        });
    })
}

module.exports.updateProductPrice = (req, res)=>{
    const product = Product.findOne({productInfo:req.body.productInfo.toLocaleLowerCase()}, async (err, returnedProduct)=>{
        if(err) return res.status(500).send({
            message: 'internal server error'
        });
        if(!returnedProduct) return res.status(404).send({
            error:'not found',
            message:'product prise you are trying to chenge does not exist'
        })

        returnedProduct.price = req.body.price;
        const saveChanges = await returnedProduct.save();

        if(!saveChanges) return res.status(500).send({
            error: 'server error',
            message: 'error occured while updeting changes'
        })


        return res.status(200).send({
            message: `price of ${saveChanges.productInfo} updated to ${saveChanges.price} successfully`
        });
    })
}