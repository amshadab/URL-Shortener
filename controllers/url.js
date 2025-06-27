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

    return res.json({id:shortID});
}


async function redirectToURL(req,res) {
    const shortId= req.params.shortId;

   const entry= await URL.findOneAndUpdate(
        {shortId},
        {$push:{visitHistory:{timestamp:Date.now()}}}
    )
return res.redirect(entry.redirectURL);
}

module.exports={
    generateNewShortURL,
    redirectToURL,    
}