module.exports = (sequelize, type) => sequelize.define('order',{
    id:{
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product_id: type.STRING,
    qty: type.INTEGER,
    total: type.INTEGER
})