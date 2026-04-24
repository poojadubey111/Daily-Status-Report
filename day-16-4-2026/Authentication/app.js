const express= require('express');
const app = express();
require('dotenv').config();



 app.listen(process.env.PORT,()=>{
    console.log(`Sever running on port ${process.env.PORT}`)
 })



