
const cote = require('cote')

var callProductRequest = new cote.Requester({
	name: 'product Request',
	key: 'product'
})


module.exports = {

	showAll: (req, res) => {
		callProductRequest.send({type: 'show'}, (err, data) => {
			res.send(data)
		})
	}, 

	showById: (req, res) => {
		callProductRequest.send({type: 'show_id', id: req.params.id}, (err, data) => {
			res.send(data)
		})	
	},
	sendRequest: (req, res) => {
	
	  callProductRequest.send({type: 'store', body: req.body})
	  res.json({
		  status: 200	
	  })
	
	}

}