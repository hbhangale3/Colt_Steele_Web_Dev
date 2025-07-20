const express = require("express");
const app = express();

// app.use((req,res)=>{
//     console.log("detected an incoming request");
//     res.send("We have received your request, thanks for reaching out to us.");
// })

app.get("/cats", (req,res)=>{
    console.log("Meow!!!!")
    res.send("Meow!!!")
})
app.get("/dogs", (req,res)=>{
    console.log("Woof!!!!")
    res.send("Woof!!!!")
})
//for home page
app.get("/", (req,res)=>{
    console.log("Welcome to the home page!")
    res.send("Welcome to the home page!")
})

app.get(/(.*)/,(req,res)=>{
    console.log("I dont know what you are talking about")
    res.send("I dont know what you are talking about")
})


app.listen(3000,()=>{
    console.log("listening for incoming request");
})