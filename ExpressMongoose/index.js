//importing packages
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');


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
app.use(methodOverride('_method'))
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

//Updating an old product

app.get('/product/:id/edit', async(req,res)=>{
    const {id} = req.params;
    const findProduct = await Product.findById(id);
    res.render('edit',{findProduct});
})

//details of a particular product
app.get('/product/:id', async(req,res)=>{
    const {id} = req.params;
    const findProduct = await Product.findById(id);
    res.render('show',{findProduct,id});
})

//updating a current product
app.put('/product/:id', async(req,res)=>{
    const {id} = req.params;
    const findProduct = await Product.findById(id);
    findProduct.name=req.body.name;
    findProduct.price=req.body.price;
    findProduct.category=req.body.category;
    await findProduct.save();
    console.log('updating information')
    res.redirect('/product')
})

//deleting an item
app.delete('/product/:id', async(req,res)=>{
    const {id} = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/product')
})

app.listen(3000,()=>{
    console.log("App Listening on port 3000");
})