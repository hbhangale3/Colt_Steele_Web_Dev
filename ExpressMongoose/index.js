//importing packages
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const morgan = require('morgan');
const AppError = require('./AppError');
const Farm = require('./model/farm');
const session = require('express-session');
const flash = require('express-flash');




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
app.use(morgan('tiny'));
app.use(session({
    secret: 'thisisnotagreatsecret',
    resave: false,
    saveUninitialized: false
}));

app.use(flash());


const verify = (req,res,next)=>{
    const {password} = req.query;
    if(password==='chickennuggets'){
      return next();
    }
   return next(new Error('Please provide correct password'));
}



//Farms

//display all farms
app.get('/farms', async (req,res)=>{
    const farms = await Farm.find({});
    res.render('farms/home', {farms, messages: req.flash('success')})
})

//adding new farm
app.get('/farms/new', (req,res)=>{
    res.render('farms/new');
})

//

app.post('/farms', async (req,res)=>{
    const farm = new Farm(req.body);
    await farm.save();
    req.flash('success','Successfully made a new farm');
    res.redirect('/farms');
})

//show page
app.get('/farms/:id', async (req,res)=>{
    const farm = await Farm.findById(req.params.id).populate('products');
    res.render('farms/show', {farm});
})

//adding a new product under a farm
app.get('/farms/:farmId/products/new',async(req,res)=>{
    
    const farm = await Farm.findById(req.params.farmId)
    res.render('farms/farmProduct', {farm});
})

app.post('/farms/:farmId/products', async(req,res)=>{
    const {name, price, category} = req.body;
    const product = new Product({name, price, category});
    const {farmId} = req.params;
    const farm = await Farm.findById(farmId);
    farm.products.push(product);
    product.farm = farm; 
    await farm.save()
    await product.save();

    res.redirect(`/farms/${farmId}`);

})
//deleting a farm and its products

app.delete('/farms/:farmId', async (req,res)=>{
    const farm = await Farm.findByIdAndDelete(req.params.farmId);
    res.redirect('/farms');
})


//Products
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

app.post('/product', async (req,res,next)=>{
    try{
        const newProd = new Product(req.body);
        
    await newProd.save();
    console.log(newProd);
    res.redirect('/product')
    }catch(e){
        next(e)
    }
    
})

//Updating an old product

app.get('/product/:id/edit', verify, async(req,res,next)=>{
    const {id} = req.params;
    const findProduct = await Product.findById(id);
    if(!findProduct){
        return next(new AppError('Product Not Found', 404));
    }
    res.render('edit',{findProduct});
})

//details of a particular product
app.get('/product/:id', async(req,res,next)=>{
    const {id} = req.params;
    const findProduct = await Product.findById(id).populate('farm');
    if(!findProduct){
        return next(new AppError('Product Not Found', 404));
    }
    res.render('show',{findProduct,id});
})

//updating a current product
app.put('/product/:id', async(req,res,next)=>{
    const {id} = req.params;
    const findProduct = await Product.findById(id);
    if(!findProduct){
        return next(new AppError('Product Not Found', 404));
    }
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

//dummy error

app.get('/error', (req,res)=>{
    chicken.fly();
})

app.use((err,req,res,next)=>{
    const{status=500, message="Something went wrong"} = err;
    res.status(status).send(message);
})

app.listen(3000,()=>{
    console.log("App Listening on port 3000");
})