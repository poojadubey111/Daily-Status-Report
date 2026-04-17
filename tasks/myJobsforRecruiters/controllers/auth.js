const authService = require("../services/auth");

exports.register = async(req,res)=>{
    try{
        const user = await authService.register(req.body);
        res.status(201).json(user);
    }catch(err){
        res.status(400).json({error:err.message});
    }
}

exports.login = async(req,res)=>{
    try{
        const data = await authService.login(req.body);
        res.status(201).json(data);
    }catch(err){
        res.status(400).json({error:err.message});
    }
}