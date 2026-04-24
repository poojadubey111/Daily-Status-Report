const express = require("express");
const router = express.Router();
// const {forgotPassword} = require("../controllers/user")
const userController = require("../controllers/user");
const { checkPermission } = require("../middlewares/checkPermission");
router.post("/forgot-password",
    // checkPermission(),
    userController.forgotPassword);


router.post("/reset-password",
    userController.resetPassword
);



module.exports=router;

