//This is creating a model 

const { DataTypes } = require('sequelize'); //It imports data types like STRING, INTEGER, BOOLEAN, etc.
const sequelize = require('../config/db');  //You are importing your DB connection

const User = sequelize.define('User',{   //Creating a model named User
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
},
 {
     schema: 'users',  
  timestamps: true
});

module.exports = User;