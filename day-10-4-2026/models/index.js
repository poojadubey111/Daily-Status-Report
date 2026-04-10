const sequelize = require("../config/db");

const User= require("./user")(sequelize);
const Role = require("./role")(sequelize);
const Permission=require("./permission")(sequelize);
const RolePermission = require("./rolePermission")(sequelize);

User.belongsTo(Role,({foreignKey:"role_id"}))
Role.hasMany(User,({foreignKey:"role_id"}));

Role.belongsToMany(Permission,({through:"rolePermission"}))
Permission.belongsToMany(Role,({through:"rolePermission"}));

module.exports = {
  sequelize,
  User: User,
  Role: Role,
  Permission: Permission
};
   
