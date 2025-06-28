const express = require("express");
const {getHomePage} = require("../controllers/url");
const router = express.Router();


router.get("/",getHomePage);

module.exports=router;