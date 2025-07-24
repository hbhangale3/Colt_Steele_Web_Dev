const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
.then(()=>{
    console.log("Connection Opem");
})
.catch((err)=>{
    console.log("Oh No error");
    console.log(err);
})

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    onSale:{
        type: Boolean,
        default: false
    },
    categories: [String],
    qty:{
        online:{
            type:Number,
            default:0
        },
    inStore:{
        type: Number,
        default:0
    }
    }

});

const Product = mongoose.model('Product', productSchema);

const bike = new Product({name:'Mountain Bike', price:599, color:'Red'})
bike.save()
.then(data =>{
    console.log("It Worked!!");
    console.log(data);
})
.catch(err=>{
    console.log("Oh No Error");
    console.log(err)
})
