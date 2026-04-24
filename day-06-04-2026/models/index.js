const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    schema:"usermanagement",
    dialect: "postgres",
    logging:false
  }
);

// Import models
const User = require("./user.model")(sequelize);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("DB Connected ");
  } catch (err) {
    console.error("DB Error ", err);
  }
})();

// Export
module.exports = {
  sequelize,
  User
};