const { sequelize } = require("../config/db");
const User = require("./user")(sequelize);
const Role = require("./role")(sequelize);
const Permission = require("./permission")(sequelize);
const RolePermission = require("./rolePermission")(sequelize);

// Relations
User.belongsTo(Role, { foreignKey: "role_id" });
Role.hasMany(User, { foreignKey: "role_id" });

Role.belongsToMany(Permission, { through: RolePermission ,
   foreignKey: "role_id"
});
Permission.belongsToMany(Role, { through: RolePermission,
   foreignKey: "permission_id"
 });

// Export
module.exports = {
  sequelize,
  User,
  Role,
  Permission,
  RolePermission
};