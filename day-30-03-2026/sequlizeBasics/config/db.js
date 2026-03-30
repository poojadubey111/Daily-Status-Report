const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('userdb1','postgres','Nimap@123',{
    host:'localhost',
    dialect: 'postgres'
})

module.exports = sequelize;