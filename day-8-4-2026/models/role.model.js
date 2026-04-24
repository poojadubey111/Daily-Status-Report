const {DataTypes} = require("sequelize");
const sequelize = require("../config/db");

module.exports = (sequelize) =>{
    return sequelize.define("Role",{
        role_name:{
            type:DataTypes.STRING,
            unique:true
        },
        description:{
              type:DataTypes.STRING
        }
    })
}