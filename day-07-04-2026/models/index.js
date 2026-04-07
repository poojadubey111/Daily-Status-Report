const { DataTypes } =require("sequelize");
const sequelize = require("../config/db");

const User = require("./user.model")(sequelize,DataTypes);

sequelize.sync({alter:true});

module.exports = {
    sequelize,
    User
};