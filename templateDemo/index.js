const express = require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname,"/views"));

//setting the view engine as EJS
app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    res.render("about");
})

app.get("/r/:subreddit",(req,res)=>{
    const {subreddit} = req.params;
    res.render("subreddit", {subreddit});
})

app.get("/cats", (req,res)=>{
    const cats = ['blue','rocket','monty','stephanie'];
    res.render('cats',{cats});
})

app.get("/random", (req,res)=>{
    const num = Math.floor(Math.random()*10+1);
    res.render("random",{rand:num});
})
app.listen(3000,()=>{
    console.log("Listening for request");
})