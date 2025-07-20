const express = require("express");
const app = express();

app.use((req,res)=>{
    console.log("detected an incoming request");
    res.send("We have received your request, thanks for reaching out to us.");
})
app.listen(3000,()=>{
    console.log("listening for incoming request");
})