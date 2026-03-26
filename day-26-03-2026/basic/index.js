//-----1st Create server--------

const express = require('express'); //import express library
const app = express();   // --- Creating an Express application instance

app.get('/',(req,res)=>{        //--defining a get route    root
    res.send("Hello from express");
});

app.get('/about',(req,res)=>{   // /about 
    res.send("About Page");
});


app.get('/home',(req,res)=>{
    res.send("home page");
})

app.get('/about/users',(req,res)=>{
    res.send("User page");
})
//------------Basic understanding of get End here------
//--------------------------------------------------------------------------

app.use(express.json());  //middleware-To read JSON from request body

app.post('/user',(req,res)=>{        //req → data coming from client                                 
    console.log(req.body);            //res → response you send
    res.send("User Created");
})


app.post('/users',(req,res)=>{
    const {name , age} = req.body ; // req.body contains data from client by frontend or postman 
      //{name,age} -> It is a destructuring data from req,body
      res.send(`User name is ${name} and age is ${age}`);

})
app.post('/products',(req,res)=>{
    const {name,price,quantity} = req.body;
    res.send(`Product name is ${name} and price is ${price} ,quantity is ${quantity}`);
})
//----------Add validations-------------------
app.post('/candidate',(req,res)=>{
    const {name,course} = req.body;

    if(!name || !course){
        return res.send("Name and course is required...");
    }
    res.send(`Candidate name is ${name} and course applied for ${course}`);
})

app.post('/job',(req,res)=>{
    const {company,profile,salary} = req.body;

    if(!company || !profile || !salary){
        return res.send("company name,profile and salary is required...");
    }
    res.send(`company name is  ${company} Job profile is ${profile} and Salary is ${salary}`);
})

//------------Basic understanding of Post End here------

app.listen(3000,()=>{                                 //starting server on port 3000
    console.log('server started on port 3000...!');
})
