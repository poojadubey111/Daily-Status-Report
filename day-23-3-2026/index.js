const express = require('express');
const app = express();
const pool = require('./db');
require('dotenv').config();

app.use(express.json()) // middleware

//Get all users

app.get('/users',async(req,res)=>{
    const result = await pool.query('SELECT * FROM testCRUD.users');
    res.json(result.rows);
})

//Get Single User
app.get('/users/:id',async(req,res)=>{
    const id = parseInt(req.params.id);
    const result = await pool.query(
        'SELECT * FROM testCRUD.users WHERE id = $1',
        [id]
    );
    res.json(result.rows[0]);
});







// async function testDB(){
//     try{
//         const res = await pool.query('SELECT NOW()');
//         console.log("connected", res.rows);
//     }catch(err){
//         console.log("Error",err);
//     }
// }

// async function insertUser(){
//     const res = await pool.query(
//         'INSERT INTO testUser.users(name,email) VALUES ($1,$2) RETURNING *',
//         ['Amit','amit@gmail.com']
//     );
//     console.log(res.rows);
// }

// async function getUsers(){
//     const res = await pool.query('select * from testUser.users');
//     console.log(res.rows);
// }

// testDB();
// insertUser();
// getUsers();


app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`);
})