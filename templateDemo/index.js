const express = require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname,"/views"));

//setting the view engine as EJS
app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    res.render("about");
})

app.get("/random", (req,res)=>{
    res.render("random");
})
app.listen(3000,()=>{
    console.log("Listening for request");
})