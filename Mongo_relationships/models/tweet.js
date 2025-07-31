import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/mongoRelationships')
.then(()=>{
    console.log("Mongo Connection Open");
})
.catch((err)=>{
    console.log("Oh No Mongo error");
    console.log(err);
})


const userSchema = mongoose.Schema({
    username: String,
    age: Number
})

const tweetSchema = mongoose.Schema({
    comment: String,
    like: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);


// await User.create({
//     username: 'Harry Potter',
//     age: 25
// }).then((usr)=>{
//     console.log(usr);
// })

// const makeTweets = async() =>{
//     const user = await User.findOne({username: 'Harry Potter'});
//     const tweet = new Tweet({
//         comment: 'I like potatoes',
//         like: 25
//     });
//     tweet.user = user;
//     const res = await tweet.save();
//     console.log(res);
// }

// makeTweets();

const findTweet = async() =>{
    const t = await Tweet.findOne({}).populate('user')
    console.log(t);
}

findTweet();
