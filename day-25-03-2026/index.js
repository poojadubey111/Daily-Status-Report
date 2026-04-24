const express = require('express');
const app = express();
const pool = require('./db');
require('dotenv').config();

app.use(express.json());

app.post('/products',async(req,res)=>{
    try{
        const {name,quantity,price} = req.body;
        const result = await pool.query(
            'INSERT INTO products.product (name,quantity,price) VALUES ($1,$2,$3) RETURNING *',
            [name,quantity,price]
        );
        res.status(201).json(result.rows[0]);
    }catch(err){
        res.status(500).json({error:err.message});
    }

})

app.get('/products',async (req,res)=>{
    try{
        const result = await pool.query('SELECT * FROM products.product')
        res.status(201).json(result.rows);
    }catch(err){
        res.status(500).json({error:err.message});
    }
});
app.get('/products/:id',async(req,res)=>{

    const {id }= req.params;
    try{
        const result =await pool.query('SELECT * FROM products.product where id=$1',
        [id]);
    res.json(result.rows[0])
    }catch(err){
       res.status(500).json({ error: err.message });
    }
})

app.listen(process.env.PORT,()=>{
    console.log(`Server running on ${process.env.PORT}`);
})