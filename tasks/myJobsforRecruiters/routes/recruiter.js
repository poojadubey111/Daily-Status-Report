const express = require('express');
const router = express.Router();
const checkAuth = require("../middlewares/checkAuth");
const { checkPermission } = require("../middlewares/checkPermission");
const recruiterController = require('../controllers/recruiters')
router.get(
    "/applicants",
    checkAuth,
    checkPermission("GET","/applicants"),
    recruiterController.getApplicantsForRecruiter
)

module.exports = router;