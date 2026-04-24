const express = require("express");
const router = express.Router();

const jobController = require("../controllers/job");
const checkAuth = require("../middlewares/checkAuth");
const { checkPermission } = require("../middlewares/checkPermission");

//-----start create job------------
router.post(
    "/",
    checkAuth,
    checkPermission("POST","/api/jobs"),
    jobController.createJobController
);
//----------end-----------------


router.get(
    "/",
    checkAuth,
    checkPermission("GET","/jobs"),
    jobController.getJobs
);

module.exports = router;