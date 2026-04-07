exports.getProfile = (req,res) =>{
    res.json({
        message:"User Profile",
        user:req.user
    });
};
exports.getAdminData = (req,res)=>{
    res.json({
        message:"Admin data"
    })
}