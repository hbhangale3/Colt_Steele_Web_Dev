const express = require("express");
const app = express();

app.use(()=>{
    console.log("detected an incoming request");
})
app.listen(3000,()=>{
    console.log("listening for incoming request");
})