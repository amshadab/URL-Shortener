const express = require("express");
const urlRouter=require("./routes/url");
const path = require("path");
const cookieParser=require("cookie-parser");
const staticRouter= require("./routes/staticRouter");
const userRouter = require("./routes/user");
const {restricToLoggedInUserOnly, checkAuth} = require("./middlewares/auth");
const {connectToMongoDB} = require("./connect");

const app = express();
const PORT= 8000;

connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
.then(()=>{
    console.log("MongoDB connected");
    
})
.catch(()=>{
    console.log("MongoDB not connected");
    
})


app.set("view engine","ejs");
app.set("views",path.resolve("./views"))

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(cookieParser());
app.use("/url",restricToLoggedInUserOnly,urlRouter);
app.use("/",checkAuth,staticRouter);
app.use("/user",userRouter);


app.listen(PORT,()=>{
    console.log(`Server started at port: ${PORT}`);
    
});
