const express = require('express')
var app = express()
var bodyParser = require('body-parser')


//register router

const port = process.env.PORT_ENV || 3000

app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())

require('./route/router.js')(app)


app.listen(port, () => console.log(`Server Running On Port ${port}`))
