const express = require('express');
const router = express.Router();

const {getAllCandidates,getAllRecruiters,getAllJobs} = require("../controllers/admin");

const checkAuth = require("../middlewares/checkAuth");
const {checkPermission} =require("../middlewares/checkPermission");
const { deleteUser } = require("../controllers/admin");
const { deleteJob } = require('../controllers/admin');


router.get(
    "/candidates",
    checkAuth,
    checkPermission("GET","/candidates"),
    getAllCandidates
);

router.get(
    "/recruiters",
    checkAuth,
    checkPermission("GET","/recruiters"),
    getAllRecruiters
);

router.get(
    "/jobs",
    checkAuth,
    checkPermission("GET","/jobs"),
    getAllJobs
);



router.delete(
    "/users/:id",
    checkAuth,
    checkPermission("DELETE", "/users/:id"),
    deleteUser
);

router.delete(
    "/jobs/:id",
    checkAuth,
    checkPermission("DELETE","/jobs/:id"),
    deleteJob
)

module.exports = router;