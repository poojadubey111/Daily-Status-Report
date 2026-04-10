const router = require("express").Router();
const {checkPermission } =require("../middleware/checkPermission");
const auth = require("../middleware/checkAuth");

router.get(
    "/admin",
    auth,
    checkPermission("Create_User"),
    (req,res)=>{
        res.json({message:"Admin Access Granted"});
    }
);
module.exports = router;