module.exports = (sequelize, type) => sequelize.define('products',{
    id:{
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: type.STRING,
    price: type.INTEGER,
    stock: type.INTEGER
})