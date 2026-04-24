const router = require("express").Router();
const auth = require("../middleware/checkPermission");
const checkPermission = require("../middleware/checkPermission");
router.get(
    "/admin",
    auth,
    checkPermission("CREATE_USER"),
    (req,res)=>{
        res.json({message:"Admin Access Granted"});
    }
);

module.exports = router;