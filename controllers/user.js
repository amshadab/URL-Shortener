const User = require("../models/user");
// const URL = require("../models/url");



async function userSignUp(req,res) {
    if(!req.body){
        return res.json({error:"All Fields required"})
    }
    const {name,email,password} =  req.body;

    await User.create({
        name,
        email,
        password,
    });
    //  const allURl = await URL.find({});

    return res.render("/");
}

async function getSignUpPage(req,res) {
    return res.render("signup");
}

async function userLogin(req,res) {
    const {email, password} = req.body;
   const user= await User.findOne({email,password});
if(!user){
    return res.render("login",{error:"Invalid Credentials"});
}
return res.redirect("/");
}


async function getLoginPage(req,res) {
    return res.render("login");
}
module.exports={
    userSignUp,
    getSignUpPage,
    userLogin,
    getLoginPage, 

}