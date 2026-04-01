const { Post, User, Comment} = require('../models');

exports.createPost = async (req,res)=>{
    const post = await Post.create(req.body);
    res.json(post);
}

exports.getPosts = async(req,res) =>{
    const posts = await Post.findAll({
        include:[
            {model:User, as:'author'},
            {model:Comment,as:'comments'}
        ]
    });
    res.json(posts);
};