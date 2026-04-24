const router = require("express").Router();
const {verifyToken} = require("../middleware/auth.middleware");
const{allowRoles} = require("../middleware/role.middleware");
const {
    getProfile,
    getAdminData
} =require("../controllers/user.controller");

router.get("/profile",verifyToken,getProfile);
router.get("/admin",verifyToken,allowRoles("admin"),getAdminData);


module.exports = router;