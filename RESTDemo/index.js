const express = require('express');
const app = express();
const path = require('path');
const {v4:uuid} = require('uuid');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}));
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs');

let comments = [
    {   
        id: uuid(),
        username: 'harsh',
        comment: 'hey there'
    },
    {   
        id:uuid(),
        username: 'shivangi',
        comment: 'dont make me angry'
    },
    {   
        id:uuid(),
        username: 'tod',
        comment: 'Please delete my account, TOD'
    }
]
//list all comments
app.get('/comments',(req,res)=>{
    res.render('index',{comments});
})

//share form with user
app.get('/comments/new',(req,res)=>{
    res.render('new');
})

//fetch user comment
app.post('/comments', (req,res)=>{
    console.log(req.body);
    const {username,comment} = req.body;
    comments.push({username,comment, id:uuid()});
    //res.send("IT WORKED");
    res.redirect('/comments');
})

//selecting a specific comment
app.get('/comments/:id',(req,res)=>{
    const {id} = req.params;
    const comment = comments.find(c =>{
        if(c.id===id)
            return c
    })

    res.render('show', {comment});
})

//patching a specific comment
app.patch('/comments/:id',(req,res)=>{
    const {id } = req.params;
    const newComment = req.body.comment;
    console.log(req.body.comment)
    const foundComment = comments.find(c =>{
        if(c.id===id)
            return c;
    })
    foundComment.comment=newComment;

    res.redirect('/comments');
})

//editing an existing comment
app.get('/comments/:id/edit',(req, res)=>{
    const {id} = req.params;
    const oldComment = comments.find(c =>{
        if(c.id===id)
            return c;
    })
//const oldCom = oldComment.comment;
    res.render('edit',{oldComment});
})

//deleting a comment 
app.delete('/comments/:id',(req,res)=>{
    const {id} = req.params;
    comments = comments.filter(c =>{
        if(c.id!==id)
            return c;
    })

    res.redirect('/comments')
})
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