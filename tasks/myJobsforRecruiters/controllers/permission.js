const permissionService =require("../services/permission");

exports.createPermission =async(req,res,next)=>{
    try{
        const permission = await permissionService.createPermission(req.body);

        res.status(201).json({
            message:"Permission created successfully",
            // data:Permission
        });
    }catch(error){
        next(error);
    }
};