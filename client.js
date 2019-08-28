const cote = require('cote')

const client = new cote.Requester({name: 'Client', key: 'client'})


client.send({type: 'order_item'}, (time) => {
	console.log(time) 
})
