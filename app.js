const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.resolve(__dirname,"./public")));

app.listen(process.env.PORT||3000, function(){
    console.log("Ok Server start http://localhost:3050");
})


app.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"/views/home.html"))
});
app.get("/register.html",function(req,res){
    res.sendFile(path.join(__dirname,"/views/register.html"))
});
app.get("/login.html",function(req,res){
    res.sendFile(path.join(__dirname,"/views/login.html"))
});
