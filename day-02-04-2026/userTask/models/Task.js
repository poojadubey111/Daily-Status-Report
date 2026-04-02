const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

module.exports = (sequelize,DataTypes)=>{
    const Task = sequelize.define('Task',{
        task:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },{
        tableName:'tasks_info',
        schema:'managetasks',
    });
    return Task;
}