
const router = require("express").Router();
const controller = require("../controllers/auth.controller");
const { createRole } = require("../controllers/role");
const checkAuth = require("../middleware/checkAuth");
const checkPermission = require("../middleware/checkPermission");

router.post("/register", controller.register);
router.post("/login", controller.login);
router.post("/roles",createRole);
router.get("/users", checkPermission,controller.getAllUsers);
router.post("/permission",controller.craetePermission);
router.post("/rolepermission",controller.createRolePermission);

module.exports = router;