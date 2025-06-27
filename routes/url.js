const express = require("express");
const {generateNewShortURL}=require("../controllers/url");
const {redirectToURL} = require("../controllers/url");
const {getAnalytics}=require("../controllers/url");

const router = express.Router();


router.post("/",generateNewShortURL);
router.get("/:shortId",redirectToURL);
router.get("/analytics/:shortId",getAnalytics);

module.exports=router;