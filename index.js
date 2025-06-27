const express = require("express");
const urlRouter=require("./routes/url");

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


app.use(express.urlencoded({ extended: false }));
app.use("/url",urlRouter);

app.listen(PORT,()=>{
    console.log(`Server started at port: ${PORT}`);
    
});
