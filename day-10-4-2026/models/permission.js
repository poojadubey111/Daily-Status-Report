const sequelize=require("../config/db");
const {DataTypes}=require("sequelize");

module.exports = (sequelize)=>{
    return sequelize.define("Permission",{
        base_name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        method:{
            type:DataTypes.STRING
        },
        url:{
            type:DataTypes.STRING
        }
    })
}