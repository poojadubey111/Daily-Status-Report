const express =require('express');
const app = express();


app.listen(3000,()=>{
    console.log(`Successfully Connected on port 3000`);
})


app.get('/',(req,res)=>{
    res.send("<h1>Hello...learn Node.js</h1>");
})

app.get('/about',(req,res)=>{
    res.send("<h1>About Page</h1>");
})

app.get('/about/user/',(req,res)=>{
    res.send("<h1>User Page</h1>");
})


app.get('/about/:id',(req,res)=>{
    res.send(req.params);
})
app.get('/gallary',(req,res)=>{
    res.send("<h1>Gallary Page</h1>");
})

app.get('/user/:userid/bool/:bookid',(req,res)=>{
    res.send("User id : " + req.params.userid);
})

app.get('/search',(req,res)=>{
    res.send(req.query);
})