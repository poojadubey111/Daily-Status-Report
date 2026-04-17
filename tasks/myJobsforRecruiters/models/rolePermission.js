const { DataTypes } = require("sequelize");
const permission = require("./permission");

module.exports = (sequelize)=>{
    const RolePermission =sequelize.define("RolePermission",{
          id:{
            type:DataTypes.INTEGER,
            pimaryKey:true, 
            autoIncrement: true            
          },

          role_id:{
            type:DataTypes.INTEGER,
            allowNull:false
          },
          permission_id:{
            type:DataTypes.INTEGER,
            allowNull:false
          }
    });
    return RolePermission;
}