const express = require('express');
const app = express();
const pool = require('./db');
require('dotenv').config();


app.get('/',async (req,res) => {
try{
     const result= await pool.query('SELECT * FROM users.userInfo')
    res.status(200).json({
        success:true,
        count:result.rows.length,
        data:result.rows
    });
}catch(err){
    console.log(err);
    res.status(500).json({
        success:false,
        message:"Internal Server Error.."
    })
}
   

})

app.get('/users',async(req,res)=>{
    try{
        const result= await pool.query('SELECT email from users.userInfo');
        res.status(200).json({
            success:true,
            count:result.rows.length,
            data:result.rows
        })

    }catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:"Internal Server Error..."
        })
    }
})


//get specific user info 
app.get('/users/:id',async(req,res)=>{
    try{
        const id = req.params.id;

    const result = await pool.query('SELECT * FROM users.userInfo WHERE id = $1',
        [id]
    );

    //if User not found

    if(result.rows.length === 0 ){
        res.status(400).json({
            success: false,
            message:"USer not found"
        })
    }

    res.status(200).json({
        success:true,
        data:result.rows[0]
    })

    }catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:"Internal Server Error..."
        })
    }
})

// app.get('/users/:name',async(req,res)=>{
//     try{
//         const {name} = req.params;
// console.log("Name:", name); 
//         const result = await pool.query('SELECT * FROM users.userInfo WHERE name =$1',
//             [name]
//         )
// console.log("Result:", result.rows); 
//         if(result.rows.length === 0){
//             return res.status(404).json({
//                 success:false,
//                 message:"User not found"
//             })
//         }

//         res.status(200).json({
//             success:true,
//             data:result.rows[0]
//         })

//     }catch(err){
//          console.error(err); 
//         res.status(500).json({
//             success:false,
//             message:"Internal server error..."
//         })
//     }
// })


app.listen(3000,()=>{
console.log("Server is connected on prot 3000...");
})
