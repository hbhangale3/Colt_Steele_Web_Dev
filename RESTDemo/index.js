const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));

app.get('/tacos',(req,res)=>{
    res.send("GET /tacos Response")
})

app.post('/tacos',(req,res)=>{
    console.log(req.body);
    res.send("POST /tacos Response")    

})

app.listen(3000,()=>{
    console.log("Listening on Port 3000");
})