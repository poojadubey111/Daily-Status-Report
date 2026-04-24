const express = require("express");
const router = express.Router();
const applicationController = require("../controllers/application");

const checkAuth = require('../middlewares/checkAuth');
const { checkPermission } = require('../middlewares/checkPermission');


//route for job apply

router.post(
  "/",
  checkAuth,
  checkPermission("POST", "/api/applications"),
  applicationController.applyJob
);

//route for get applied jobs 
router.get(
    "/",
    checkAuth,
    checkPermission("GET","/api/applications"),
    applicationController.getAppliedJobs
)

module.exports = router;