const express= require('express');
const app = express();


const pool = require('./db');

async function testDB(){
    try{
        const res = await pool.query('SELECT NOW()');
        console.log("Connected",res.rows);
    }catch(err){
        console.log("ERROR",err);
    }
}
testDB();

app.listen(3000,(req,res)=>{
    console.log("server connected on port 3000..!");
})