const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Post = sequelize.define('Post',{
    title:{
        type:DataTypes.STRING,
        allowNull:false
    }
},
{
     schema: 'socialMedia',  
  timestamps: true
});

module.exports = Post;