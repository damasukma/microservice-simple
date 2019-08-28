const cote = require('cote')

const orderService = new cote.Responder({name: 'Order Response', key: 'order'})
const productPublish = new cote.Publisher({name: 'Product Publish'})

const { OrderModel } = require('./connection')

orderService.on('create', (req, cb) => {
	let data = OrderModel.create({
		product_id: req.body.product_id,
		qty: req.body.qty,
		total: req.body.total
	})

	productPublish.publish('product update', req.body)	
	console.log(req.body)
	cb(data)
})



