const roleService=require("../services/role")

exports.createRole=async(req,res)=>{
    try{
        
        const role =await roleService.createRole(req.body.role_name);
         res.status(201).json(role);
    }catch(err){
         console.log("FULL ERROR:", err); 

res.status(400).json({ error: err.message });
    }
}