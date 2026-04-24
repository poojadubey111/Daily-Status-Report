
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

module.exports = (sequelize)=>{
    return sequelize.define("RolePermission",{
        role_id:{
              type:DataTypes.INTEGER,
            unique:true
        },
         permission_id:{
              type:DataTypes.INTEGER,
            unique:true
        }
    });
};