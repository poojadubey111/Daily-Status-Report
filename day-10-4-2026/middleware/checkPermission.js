const permissionModel = require("../models/permission");
const rolePermissionModel=require("../models/rolePermission");


exports.checkPermission = ()=>{
    return async(req,res,next)=>{
        req.baseUrl,
        req.method,
        req.url

        const permission=await permissionModel.findOne({
            where:{
                baseUrl:req.baseUrl,
                method:req.method,
                url:req.url
            },
        })
        if(!Permission){
            return res.status(403).send("Permission not found");
        }
       const rolePermission = rolePermissionModel.findOne({
        where:{
            role_id:req.user.role_id,
            permission_id: Permission.id
        }
       })
       if(!rolePermission){
        return res.status(403).send("Forbidden error");
       }
       return next();
    }
    
}