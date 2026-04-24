const authService = require("../services/auth.service");
const { createRole } = require("../services/role");
// const { generateToken } =require("../utils/jwt");

exports.createRole = async (req, res)=>{
    try{
        const role = await createRole(req.body);
        res.json(role);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};