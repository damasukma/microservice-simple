var orderController = require('./../controller/order')
var productController = require('./../controller/product')
module.exports = (app) => {

	app.get('/api/product', (req, res) => productController.showAll(req, res))
	app.get('/api/product/:id', (req, res) => productController.showById(req, res))
	app.post('/api/product', (req, res) => productController.sendRequest(req, res))		

	//order
	app.post('/api/order', (req, res) => orderController.sendRequest(req, res))

}