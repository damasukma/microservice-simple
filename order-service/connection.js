const Sequelize = require('sequelize')
const Order = require('./Order')

const sequelize = new Sequelize('toko_sedia_order', 'username', 'password',{
    host: 'localhost',
    dialect: 'mysql'
})

const OrderModel = Order(sequelize, Sequelize)

sequelize.sync({force: false})
.then(() => console.log(`Database & table created`))

module.exports = {
    OrderModel
}
