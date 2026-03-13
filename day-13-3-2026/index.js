const express= require("express");
const app = express();

app.listen(3000,(req,res)=>{
    console.log("Server is connected on port 3000!")
});

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post('/about',(req,res)=>{
    res.send(req.body);
  
})
app.get('/about',(req,res)=>{
   
    // res.send(req.hostname);

    // res.send(req.ip);

    // res.send(req.ips);

    // res.send(req.method);
    // res.send(req.originalUrl);
    // res.send(req.path);
    // res.send(req.protocol);
    // res.send(req.secure);
    res.send(req.route);
})