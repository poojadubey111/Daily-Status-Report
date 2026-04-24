const authService = require("../services/auth.service");
const { getAllUsers } = require("../services/user.service");
const { generateToken } =require("../utils/jwt");

exports.register = async (req, res)=>{
    try{
        const user = await getAllUsers(req,res);
        res.json(user);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

 