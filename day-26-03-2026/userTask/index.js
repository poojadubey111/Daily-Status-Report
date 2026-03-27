const express = require('express');
const app = express();
const pool = require('./db')
require('dotenv').config();

app.use(express.json());
//---------create user---------------
app.post('/users', async (req, res) => {
    try {
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).json({
                success: false,
                message: "All fields are required..! Please enter all required data..."
            })
        }

        const result = await pool.query(
            'INSERT INTO managetasks.users (name,email) VALUES ($1,$2) RETURNING *',
            [name, email]
        )
        return res.status(201).json({
            success: true,
            data: result.rows[0]
        })

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }

})

//-----------------------create task------------------------------------
app.post('/tasks', async (req, res) => {
    try {
        // const { id } = req.params;
        const {id, assigned_to, task } = req.body;
        
        if (!assigned_to || !task) {
            return res.status(400).json({
                success: false,
                message: "All fields are required..! Please enter all required data..."
            })
        }


        const result = await pool.query(
            'INSERT INTO managetasks.tasks_info (user_id,assigned_to,task ) VALUES ($1, $2, $3) RETURNING *',
            [id, assigned_to, task]
        );
        return res.status(201).json({
            success: true,
            data: result.rows[0]
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }



})
//------------------------assigned-task --------------------------------------
app.get('/users/:id/assigned-tasks',async(req,res)=>{
    try{
    const id = req.params.id;

     const result = await pool.query(
        'select u.name,t.task from managetasks.tasks_info as t JOIN managetasks.users as u on u.id=t.user_id where u.id=$1',
        [id]
    );
     if(result.rows.length === 0 ){
        return res.status(400).json({
            success: false,
            message:"User didn't assigned tasks to anyone"
        })
    }

    return res.status(200).json({
        success:true,
        data:result.rows
    })

    }catch(err){
        console.log(err);
         return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
 
})


//--------------User task list----------------------------
app.get('/users/:id/tasks',async(req,res)=>{
    try{
    const id = req.params.id;

     const result = await pool.query(
        'select u.name,t.task from managetasks.users as u JOIN managetasks.tasks_info as t on u.id=t.assigned_to  where u.id=$1',
        [id]
    );
     if(result.rows.length === 0 ){
        return res.status(404).json({
            success: false,
            message:"task not found"
        })
    }

    return res.status(200).json({
        success:true,
        data:result.rows
    })

    }catch(err){
        console.log(err); 
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })

    }
 
})

app.listen(3000, () => {
    console.log('server is  connected on port 3000...');
})
