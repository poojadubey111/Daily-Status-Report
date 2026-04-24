const { DataTypes } = require("sequelize");
const permission = require("./permission");

module.exports = (sequelize) => {
  const RolePermission = sequelize.define("RolePermission", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
        references: {
                model: "Roles",
                key: "id"
            }
    },
    permission_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return RolePermission;
}