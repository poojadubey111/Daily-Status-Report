const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

module.exports = (sequelize) =>{
    return sequelize.define("User",{
        name:{
          type:DataTypes.STRING},

        email:{
            type:DataTypes.STRING,
            unique:true},
        password:{
            type:DataTypes.STRING
    },
    role_id:{
        type:DataTypes.INTEGER,
        unique:true
    }
});
};