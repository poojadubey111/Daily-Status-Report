const { DataTypes }=require("sequelize");
const { sequelize } = require(".");

module.exports= (sequelize)=>{
    const Permission = sequelize.define("Permission",{
         id:{
            type:DataTypes.INTEGER,
            pimaryKey:true, 
            autoIncrement: true            
          },
        base_name:{
            type:DataTypes.STRING,
            allowNull:false 
        },
        method:{
            type:DataTypes.STRING,
            allowNull:false
        },
        url:{
            type:DataTypes.STRING,
            allowNull:false
        }
    });
    return Permission;
};