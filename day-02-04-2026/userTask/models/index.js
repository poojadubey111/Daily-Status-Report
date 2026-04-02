const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const UserModel = require('./User');
const TaskModel = require('./Task');


const User = UserModel(sequelize,Sequelize.DataTypes);
const Task = TaskModel(sequelize,Sequelize.DataTypes);

//Associations
//User create tasks 
 User.hasMany(Task,{ foreignKey:'user_id',as:'createdTasks'});
 Task.belongsTo(User, {foreignKey:'user_id',as:'creator'});

 //User assigned tasks
 User.hasMany(Task,{foreignKey:'assigned_to',as:'assignedTasks'});
 Task.belongsTo(User, { foreignKey:'assigned_to',as:'assignee'
 })

 module.exports= {sequelize,User,Task};