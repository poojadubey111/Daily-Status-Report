// const pool = require('pg');
const pool = require('../config/db');
exports.getUsers = async(req,res)=>{
    try{
        const result = await pool.Query('SELECT * FROM userInfo.users');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({
            success:false,
            message:"Internal server error"
        });
    }
};

exports.createUser = async(req,res)=>{
    try{
        const {name,email}=req.body;

        const result = await pool.query(
            'INSERT INTO userInfo.users (name, email) VALUES ($1, $2) RETURNING *',
            [name, email]
        );
        res.status(201).json({
            success:true,
            data:result.rows[0]});
      }catch(err){
         console.error("FULL ERROR:", err); 
        res.status(500).json({
            success:false,
            message:"Internal server error"
        });
}
}