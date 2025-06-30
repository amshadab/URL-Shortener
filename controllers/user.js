const User = require("../models/user");
// const URL = require("../models/url");
const {v4: uuidv4} = require("uuid");
const {setUser} = require("../services/auth");
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

    return res.redirect("/login");
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
const sessionId = uuidv4();
setUser(sessionId,user);
res.cookie("uid",sessionId);
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