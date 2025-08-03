const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const User = require('./models/user');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');

//connecting to mongoDB
mongoose.connect('mongodb://127.0.0.1:27017/authDemo')
.then(()=>{
    console.log("Mongo Connection Open");
})
.catch((err)=>{
    console.log("Oh No Mongo error");
    console.log(err);
})

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}));
app.use(session({secret:'notagoodsecret', resave: false, saveUninitialized: false}));


const hashpassword = async(pw) =>{
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(pw,salt);
    return hash;
}

const login = async(pw, hashedPw)=>{
    const result = await bcrypt.compare(pw,hashedPw);
    return result;
}

const requiredLogin = (req,res,next)=>{
    if(!req.session.user_id){
        return res.redirect('/login');
    }else{
        next();
    }
}


//home page

app.get('/home', (req,res)=>{
    res.render('home');
})

//user form to register
app.get('/register',(req,res)=>{
    res.render('register');
})

//saving user details to db
app.post('/register', async (req,res)=>{
    const user = new User({
        username: req.body.username,
        password: req.body.password
    })

    await user.save();
    res.redirect('/home');

})

//logging in

app.get('/login',(req,res)=>{
    res.render('login');
})

app.post('/login', async(req,res)=>{

    const {username, password} = req.body;
    const result = await User.findAndValidate(username,password)
    if(result){
        req.session.user_id=result._id;
        res.send('Login Successful!!');
    }else{
        res.send('Login Failed, please try again!');
    }
})


app.get('/secret', requiredLogin, (req,res)=>{
    res.render('secret');
})

//logging out
app.post('/logout', (req,res)=>{
    req.session.user_id=null;
    res.redirect('/home');
})

app.listen(3000,()=>{
    console.log('Listening on port 3000!');
})



//hashpassword('monkey');

// login('monkey','$2b$10$zBCE5xtvUhrgp48VYiVwxuZjk9d25Sw3jgzYQ3GPlnbq59q8gxLjS');