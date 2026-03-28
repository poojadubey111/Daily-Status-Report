const express = require('express');
const app=express();
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
app.use(express.json());

//mount router

app.use('/users', userRoutes);

app.listen(process.env.port,(req,res)=>{
    console.log(`Server running on port ${process.env.port}`);
})