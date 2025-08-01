const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');


app.use(cookieParser('thisismysecret'));


app.get('/greet', (req,res)=>{
    console.log(req.cookies);
    res.send("Hey There!");
})

app.get('/getsignedcookies', (req,res)=>{
    res.cookie('fruit','grape', {signed:true})
    res.send('Sent you a signed cookie');
})

app.get('/setName', (req,res)=>{
    res.cookie('name', 'Harsh');
    res.cookie('animal', 'Tiger');
    res.send('sent you a cookie!');
})

app.listen(3000,()=>{
    console.log('listening on port 3000');
})