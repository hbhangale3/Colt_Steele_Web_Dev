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


const seedProducts = [
    {
        name: 'Ruby Grapefruit',
        price: 1.99,
        category: 'fruit'
    },
    {
        name: 'Cosmic Crisp',
        price: 5.99,
        category: 'fruit'
    },
    {
        name: 'Coriander',
        price: 0.99,
        category: 'vegetable'
    },
    {
        name: 'Onions',
        price: 3.99,
        category: 'vegetable'
    },
    {
        name: 'Giant Strawberries',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Blueberries',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Whole Vitamin D milk',
        price: 3.42,
        category: 'dairy'
    },
    {
        name: 'Paneer',
        price: 11.99,
        category: 'dairy'
    }
]

Product.insertMany(seedProducts).then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
})
// const grape = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// })

// grape.save().then(p=>{
//     console.log(p);
// }).catch(err=>{
//     console.log(err);
// })