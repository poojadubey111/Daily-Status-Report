const { User , Post} = require('../models');

//Create User

exports.createUser = async(req,res) =>{
    try{
        const user = await User.create({name : req.body.name});
        res.json(user);
    }catch(err){
        res.status(500).json({error:err.message});
    }
};

//create post
exports.createPost = async (req,res)=>{
    try{
        const post = await Post.create({
            title:req.body.title,
            userId: req.body.userId
        });
        res.json(post);
    }catch(err){
        res.status(500).json({error:err.message});
    }
};

//Get Users wih Posts

exports.getUsers = async (req,res)=>{
    try{
        const users = await User.findAll({
            include:Post
        });
        res.json(users);
    }catch(err){
        res.status(500).json({error:err.message});
    }
}