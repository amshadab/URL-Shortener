const express = require("express");
const {userSignUp} = require("../controllers/user");
const {userLogin} = require("../controllers/user");
const router = express.Router();

router.post("/",userSignUp);
router.post("/login",userLogin);

module.exports=router;