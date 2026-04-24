const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
   const Jobs = sequelize.define("Job", {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true
      },
      title: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      description: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      recruiter_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         references: {
            model: "Users",
            key: "id",
         },
      },
       status: {
         type: DataTypes.ENUM("ACTIVE", "INACTIVE"),
         defaultValue: "ACTIVE"
      },
      application_limit: {
         type: DataTypes.INTEGER,
         allowNull: false,
         defaultValue: 10
      },
       current_applicants: {
         type:DataTypes.INTEGER,
       },

      },
   );
   return Jobs;
}
