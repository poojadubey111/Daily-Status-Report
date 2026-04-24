const express = require("express");
const router = express.Router();
const checkAuth = require('../middlewares/checkAuth');

router.get("/profile", checkAuth, (req, res) => {
    res.json({
        message: "Authorized user",
        user: req.user
    });
});
module.exports = router;