const sequelize = require("../config/db");

const User = require("./user.model")(sequelize);
const Role = require("./role.model")(sequelize);
const Permission = require("./permission.model")(sequelize);
const RolePermission = require("./rolePermission.model")(sequelize);
//Junction table
// const UserRole = require("./userRole.model")(sequelize);
 

//Associations

User.belongsTo(Role,{foreignKey:"role_id"});
Role.hasMany(User,{foreignKey:"role_id"});

// User.belongsToMany(Role, { through: UserRole});
// Role.belongsToMany(User,{through: UserRole});

Role.belongsToMany(Permission,{through:RolePermission});
Permission.belongsToMany(Role,{through:RolePermission});

module.exports={
    sequelize,
    User,
    Role,
    Permission
};