const Sequelize = require('sequelize')
const Product = require('./Product')

const sequelize = new Sequelize('toko_sedia_product', 'username', 'password',{
    host: 'localhost',
    dialect: 'mysql'
})

const ProductModel = Product(sequelize, Sequelize)

sequelize.sync({force: false})
.then(() => console.log(`Database & table created`))

module.exports = {
    ProductModel
}
