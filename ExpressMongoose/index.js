//importing packages
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

//importing the model
const Product = require('./model/product');

//connecting to mongoDB
mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
.then(()=>{
    console.log("Mongo Connection Open");
})
.catch((err)=>{
    console.log("Oh No Mongo error");
    console.log(err);
})

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');


app.get('/dog',(req,res)=>{
    res.send('WOOF!!');
})

app.listen(3000,()=>{
    console.log("App Listening on port 3000");
})