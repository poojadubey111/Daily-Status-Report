const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.Role = require("./role")(sequelize, Sequelize.DataTypes);
db.User = require("./user")(sequelize, Sequelize.DataTypes);
db.Jobs = require("./job")(sequelize, Sequelize.DataTypes);
db.Application = require("./application")(sequelize, Sequelize.DataTypes);
db.Permission = require("./permission")(sequelize, Sequelize.DataTypes);
db.RolePermission = require("./rolePermission")(sequelize, Sequelize.DataTypes);



//implement one job many user 
db.User.hasMany(db.Jobs, { foreignKey: "recruiter_id" });
db.Jobs.belongsTo(db.User, { foreignKey: "recruiter_id" });

//implement one user many role
db.Role.hasMany(db.User, { foreignKey: "role_id" });
db.User.belongsTo(db.Role, { foreignKey: "role_id" });


//implement One candidate Many Application relationship
db.User.hasMany(db.Application, { foreignKey: "candidate_id" });
db.Application.belongsTo(db.User, { foreignKey: "candidate_id" });

//then implement One job Many Application relation
db.Jobs.hasMany(db.Application, { foreignKey: "job_id" });
db.Application.belongsTo(db.Jobs, { foreignKey: "job_id" });

db.RolePermission.belongsTo(db.Role, { foreignKey: "role_id" });
db.RolePermission.belongsTo(db.Permission, { foreignKey: "permission_id" });



(async()=>{
await db.sequelize.sync({alter: true})
    .then(() => console.log("Tables created"))
    .catch(err => console.log(err));
})();

module.exports = db;