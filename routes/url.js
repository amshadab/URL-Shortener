const express = require("express");
const {generateNewShortURL}=require("../controllers/url");
const {redirectToURL} = require("../controllers/url");
const {getAnalytics}=require("../controllers/url");


const router = express.Router();



router.post("/",generateNewShortURL);
router.get("/analytics/:shortId",getAnalytics);
router.get("/:shortId",redirectToURL);

module.exports=router;