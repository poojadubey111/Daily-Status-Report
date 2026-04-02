const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

module.exports = (sequelize,DataTypes)=>{
    const User = sequelize.define('User',{
        name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            unique:true
        }
    },{
        tableName:'users',
        schema:'managetasks'
    });
    return User;
 
}