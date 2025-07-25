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
app.use(express.urlencoded({extended:true}))

//list all products
app.get('/product', async (req,res)=>{
    const products = await Product.find({});
    console.log("Products will be displayed on the product page");
    res.render('product',{products})
})
//adding new product
app.get('/product/new', (req,res)=>{
    res.render('new');
})

app.post('/product', async (req,res)=>{
    const newProd = new Product(req.body);
    await newProd.save();
    console.log(newProd);
    res.redirect('/product')
})

//details of a particular product
app.get('/product/:id', async(req,res)=>{
    const {id} = req.params;
    const findProduct = await Product.findById(id);
    res.render('show',{findProduct});
})



app.listen(3000,()=>{
    console.log("App Listening on port 3000");
})