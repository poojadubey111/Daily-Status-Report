const userService = require('../services/user');

exports.forgotPassword = async(req,res) =>{
    try{
        const {email} = req.body;

        if(!email){
            return res.status(400).json({
                message:"Email is required"  
            });
        }
        const resetToken = await userService.forgotPassword({email});

        res.status(200).json({
            message:"Reset Token generate succesfully",
            token:resetToken
        });
    }catch(error){
        res.status(400).json({
            message:error.message
        });
    };
}

exports.resetPassword = async(req,res)=>{
    try{
        const {token,newPassword} = req.body;

        if(!token || !newPassword){
            res.status(400).json({
                message:"token and newPassword are required"
            });
        };

        await userService.resetPassword(token,newPassword);

        res.status(200).json({
            message:"Password reset successfully.."
        });
    }catch(err){
        res.status(400).json({error:err.message})
    }
}