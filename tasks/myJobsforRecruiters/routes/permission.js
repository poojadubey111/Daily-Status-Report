const express = require("express");
const router = express.Router();

const permissionController = require("../controllers/permission");
const checkAuth = require("../middlewares/checkAuth");
const { checkPermission } = require("../middlewares/checkPermission");

router.post(
    "/",
    checkAuth,
    checkPermission(),
    permissionController.createPermission
);


module.exports = router;