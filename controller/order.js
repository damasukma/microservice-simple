
const cote = require('cote')

var callOrderRequest = new cote.Requester({
	name: 'Order Request',
	key: 'order'
})


module.exports = {

	sendRequest: (req, res) => {
		callOrderRequest.send({type: 'create', body: req.body})
		res.send("Order Success")
	}

}