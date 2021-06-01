const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
app.use(express.static(path.resolve(__dirname,"./public")));

app.set("port",process.env.PORT||3050)

app.listen(app.get("port"), function(){
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
