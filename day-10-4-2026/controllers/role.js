const authService = require("../services/auth");

 {
    tableName: "roles_table" // ✅ change this
  }exports.createRole = async (req,res)=>{
    try{
        const role = await authService.createRole({role_name:req.body.role_name,description:req.body.description});
        res.json(role);
    }catch(err){
    console.log("FULL ERROR:", err); // 👈 important

    res.status(400).json({
        error: err.message,
        details: err.errors   // 👈 THIS WILL SHOW REAL ISSUE
    });
}
};
