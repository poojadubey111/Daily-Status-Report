const { createRole}=require("../controllers/role");
const router =require("express").Router();
router.post("/roles",createRole);

module.exports= router;