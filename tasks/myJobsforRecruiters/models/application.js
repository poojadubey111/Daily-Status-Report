module.exports = (sequelize, DataTypes) => {
    const Application = sequelize.define("Application", {

        candidate_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Users",
                key: "id"
            }
        },
        job_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Jobs",
                key: "id"
            }
        },

        applied_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        status: {
            type: DataTypes.ENUM("APPLIED", "SHORTLISTED", "REJECTED"),
            defaultValue: "APPLIED"
        },
    });
    return Application;
};