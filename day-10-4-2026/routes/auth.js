const router = require("express").Router();
const controller = require("../controllers/auth");
const {createRole} = require("../controllers/role");
const checkAuth = require("../middleware/checkAuth");
const checkPermission=require("../middleware/checkPermission");

console.log("AUTH ROUTE FILE LOADED");
router.get("/test", (req, res) => {
    res.send("Auth working");
});
router.post("/register",controller.register);
router.post("/login",controller.login);
router.post("/roles",createRole);
router.get("/users",controller.getAllUsers);
router.post("/permission",controller.createPermission);
router.post("/rolepermission",controller.createRolePermission);

module.exports = router;