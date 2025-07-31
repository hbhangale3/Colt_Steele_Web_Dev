const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mongoRelationships')
.then(()=>{
    console.log("Mongo Connection Open");
})
.catch((err)=>{
    console.log("Oh No Mongo error");
    console.log(err);
})

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            street: String,
            city: String,
            state: String,
            country: String
        }
    ]
})

const User = mongoose.model('User', userSchema);

const makeUser = async() =>{
    const u = new User({
        first: 'Harry',
        last: 'Potter'
    })

    u.addresses.push({
        street: '123 Seasme Street',
        city: 'New York',
        state: 'NY',
        country: 'USA'
    })
    const res = await u.save();
    console.log(res);
}

makeUser();