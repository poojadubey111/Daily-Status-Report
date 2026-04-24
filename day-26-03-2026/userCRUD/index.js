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
app.use(express.json());
app.post('/users',async (req,res)=>{
    try{
         const {name,email} = req.body;

         if(!name || !email){
            return res.status(400).json({
                success:false,
                message:"Name and Email are required"
            });
         }

         const existingUser = await pool.query(
            'SELECT * FROM users.userInfo WHERE email =$1',
            [email]
         );

         if(existingUser.rows.length > 0){
            return res.status(409).json({
                success:false,
                message:"Email already exists"
            });
         }

         const result = await pool.query(
            'INSERT INTO users.userInfo (name,email) VALUES ($1,$2) RETURNING *',
            [name,email]
         );

         res.status(201).json({
            success:true,
            message:"User created successfully",
            data:result.rows[0]
         });
    }catch(err){
        console.log(err);

        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        });
    }
});

app.delete('/users/:id',async (req,res) => {
    try{
        const { id } = req.params;

        if(!id || isNaN(id)){
            return res.status(400).json({
                success:false,
                message:"Valid user ID is required"
            });
        }
        const result= await pool.query(
            'DELETE FROM users.userInfo WHERE id = $1 RETURNING *',
            [id]
        );
        if(result.rows.length === 0){
            return res.status(404).json({
                success :false,
                message:"User not found"
            });
        }
        res.status(200).json({
            success:true,
            message:"User deleted successfully",
            data:result.rows[0]
        });
    }catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        });
    }
});

app.put('/users/:id', async(req,res)=>{
    try{
        const {id} =req.params;
        const {name, email} =req.body;

        if(!id || isNaN(id)){
            return res.status(400).json({
                success:false,
                message:"Validused ID is required"
            });
        }

        if(!name || !email){
            return res.status(400).json({
                success:false,
                message:"Name ans Email are required"
            });
        }
        const userCheck = await pool.query(
            'SELECT * FROM users.userInfo WHERE id = $1',
            [id]
        );
        if(userCheck.rows.length === 0){
            return res.status(404).json({
                success:false,
                message:"User not found"
            });
        }
        const emailCheck = await pool.query(
            'SELECT * FROM users.userInfo WHERE email =$1 AND id !=$2',
            [email,id]
        );

        if(emailCheck.rows.length >0){
            return res.status(409).json({
                success:false,
                message:"Email already in use"
            });
        }

        const result = await pool.query(
            'UPDATE users.userInfo SET name = $1,email=$2 WHERE id = $3 RETURNING*',
            [name,email,id]
        )
        
        res.status(200).json({
            success:true,
            message:"User updated successfully",
            data:result.rows[0]
        });
        
    }catch(err){
        console.log(err);
        
        res.status(500).json({
            success:false,
            message:"Internal server Error"
        });
    }
});


app.patch('/users/:id',async(req,res) =>{
    try{
        const { id } = req.params;
        const {name, email} =req.body;

        if(!id || isNaN(id)){
            return res.status(400).json({
                success:false,
                message:"Valid user ID is required"
            });
        }

        if(!name && !email){
            return res.status(400).json({
                success :false,
                message:"At least one field (name or email) is required"
            });
        }
        
        const userCheck = await pool.query('SELECT * FROM users.userInfo WHERE id = $1',
            [id]
        );
        
    }
})

app.listen(3000,()=>{
console.log("Server is connected on prot 3000...");
})
