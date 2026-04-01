const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const User = require('./user.model')(sequelize,DataTypes);
const Post = require('./post.model')(sequelize,DataTypes);
const Comment = require('./comment.model')(sequelize,DataTypes);
const Like = require('./like.model')(sequelize,DataTypes);

//Associations 
//User -> Post
User.hasMany(Post,{ foreignKey:'userId',as:'posts'});
Post.belongs(User,{foreignKey:'userId',as:'author'});

//Post -> Comment

Post.hasMany(Comment,{ foreignKey:'postId',as:'comments'});
Comment.belongsTo(Post,{ foreignKey:'postId'});


//User-> Comment

User.hasMany(Comment,{ foreignKey:'userId'});
Comment.belongsTo(User,{foreignKey:'userId',as:'commenter'});

//Many-to-Many(Likes)
User.belongsToMany(Post,{
    through:Like,
    as:'likedPosts',
    foreignKey:'userId'
});

Post.belongsToMany(User,{
    through:Like,
    as:'likedBy',
    foreignKey:'postId'
});

module.exports={
    sequelize,
    User,
    Post,
    Comment,Like
};