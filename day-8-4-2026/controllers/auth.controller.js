const authService = require("../services/auth.service");
const { generateToken } =require("../utils/jwt");

exports.register = async (req, res)=>{
    try{
        const user = await authService.register(req.body);
        res.status(200).json(user);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

exports.login =async(req,res)=>{
    try{
        const user = await authService.login(req.body);

        const token = generateToken(user);

        res.json({token});
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

exports.getAllUsers = async (req, res)=>{
    try{
        const user = await authService.getAllUsers(req.body);
        res.json(user);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

exports.createPermission = async (req, res)=>{
    try{
        const permission = await authService.craetePermission(req.body);
        res.json(permission);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

exports.createRolePermission = async (req, res)=>{
    try{
        const rolePermission = await authService.createRolePermission(req.body);
        res.json(rolePermission);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};