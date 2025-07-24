const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
.then(()=>{
    console.log("Connection Opem");
})
.catch((err)=>{
    console.log("Oh No error");
    console.log(err);
})

const movieSchema = new mongoose.Schema({
    title:String,
    year:Number,
    score:Number,
    rating:String
});

const Movie = mongoose.model('Movie', movieSchema);
//const interstellar = new Movie({title:'Interstellar', year:2014, score:9.6, rating:'R'});

Movie.insertMany([{
    title:'Amelie', year: 2001, score:8.3, rating:'R'
},
{
    title:'Alien', year: 1979, score:8.1, rating:'R'
},
{
    title:'The Iron Giant', year: 1999, score:7.5, rating:'PG'
},
{
    title:'Stand By Me', year: 1986, score:8.6, rating:'R'
}])
.then(data =>{
    console.log("It Worked!!");
    console.log(data);
})

