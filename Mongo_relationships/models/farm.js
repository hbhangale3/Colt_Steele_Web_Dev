import mongoose from 'mongoose'

mongoose.connect('mongodb://127.0.0.1:27017/mongoRelationships')
.then(()=>{
    console.log("Mongo Connection Open");
})
.catch((err)=>{
    console.log("Oh No Mongo error");
    console.log(err);
})

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum:['Spring', 'Summer','Fall','Winter']
    }
    
});

const farmSchema = mongoose.Schema({
    name: String,
    city: String,
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
});


const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema);

const prod = Product.insertMany([
    { name: 'Alphonso Mangoes', price: 3.99, season: 'Summer'},
    { name: 'Watermelon', price: 2.99, season: 'Summer'},
    { name: 'Apples', price: 4.99, season: 'Winter'},
    { name: 'Grapes', price: 3.75, season: 'Fall'}
]
    
)

const makeFarm = async() =>{
    const farm = new Farm({
        name: 'Patel Wadi',
        city: 'Navsari'
    });
    const melon = await Product.findOne({name: 'Watermelon'});
    farm.products.push(melon);
    const res = await farm.save();
    console.log(farm);
}

makeFarm();

Farm.findOne({
    name: 'Patel Wadi'
}).populate('products').then((farm)=>{
    console.log(farm);
})

