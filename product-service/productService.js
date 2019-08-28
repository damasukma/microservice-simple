const cote = require('cote')

const productService = new cote.Responder({name: 'Product Response', key: 'product'})
const productSubscriber = new cote.Subscriber({name: 'Product Subscribe'})
const { ProductModel } = require('./connection')

productService.on('show', async(req, cb) => {
    try{
        let product = await ProductModel.findAll({})
        cb(null, product)
    }catch(error){
        cb(error, null)
    }
})

productService.on('show_id', async(req, cb) => {
    try{
        let product = await ProductModel.findByPk(req.id)
        cb(null, product)
    }catch(error){
        cb(error, 'Error')
    }
})

productService.on('store', async (req, cb) => {
   
    let product = ProductModel.create({
        title: req.body.title,
        price: req.body.price,
        stock: req.body.stock
    })
    cb(product)
})

productSubscriber.on('product update', async(data) => {
   try{
    let row = await ProductModel.findByPk(data.product_id)
    let stock = row.stock - data.qty
    let updated = await ProductModel.update({stock: stock}, {where:{id: data.product_id}})
    console.log("Success")
   }catch(exception){
    console.log(exception)
   }
})



