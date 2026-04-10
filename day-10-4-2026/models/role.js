const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Role = sequelize.define("Role", {
        role_name: {
            type: DataTypes.STRING,
            unique: true
        },
        description: {
            type: DataTypes.STRING
        }
    }, 
      
    );

    return Role;
};