const express =require('express');
const app = express();
const pool =require('./db');
require('dotenv').config();

app.use(express.json());

// Get all products 
app.get('/products',async(req, res)=>{
    try{
        const result = await pool.query('SELECT * FROM testCRUD.products');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({error:err.message})
    }
});


// create 




app.listen(process.env.PORT,()=>{
    console.log(`Server running on port,${process.env.PORT}`);
})