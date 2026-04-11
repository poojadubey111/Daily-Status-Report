const auth = require('../services/auth');

exports.register = async(req,res)=>{
    try{
        const user= await auth.register(req.body);
        res.json({message:"User registered",user});
    }catch(err){
        res.status(400).json({error:err.message})
    }
};

exports.login=async(req,res)=>{
    try{
        const result = await auth.login(req.body);
        res.json(result);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};