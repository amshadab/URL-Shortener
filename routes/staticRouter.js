const express = require("express");
const {getHomePage} = require("../controllers/url");
const {getSignUpPage} = require("../controllers/user");
const {userLogin} = require("../controllers/user");
const {getLoginPage}= require("../controllers/user")
const router = express.Router();


router.get("/",getHomePage);

router.get("/signup",getSignUpPage);
router.get("/login",getLoginPage);
module.exports=router;