const shortid = require("shortid")
const URL= require("../models/url");

async function generateNewShortURL(req,res) {
    
    const body= req.body;
    if(!body){
        return res.status(400).json({error: "URL is required"});
    }

    const shortID = shortid();
    await URL.create({
        shortId:shortID,
        redirectURL:body.url,
        visitHistory:[],
    });

    return res.render("home",{id:shortID});

    // return res.json({id:shortID,shortURL:`http://localhost:8000/url/${id:shortID}`});
}


async function redirectToURL(req,res) {
    const shortId= req.params.shortId;

   const entry= await URL.findOneAndUpdate(
        {shortId},
        {$push:{visitHistory:{timestamp:Date.now()}}}
    )
return res.redirect(entry.redirectURL);
}

async function getAnalytics(req,res) {
    const result=await URL.findOne({shortId: req.params.shortId},{visitHistory:1,_id:0});

return res.json({totalClicks:result.visitHistory.length,analytics:result.visitHistory});

}


async function getHomePage(req,res) {
    return res.render("home");
}

module.exports={
    generateNewShortURL,
    redirectToURL,  
    getAnalytics,  
    getHomePage,
}