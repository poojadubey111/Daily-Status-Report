const express = require('express');
const app = express();

const sequelize = require('./config/db');
const User = require('./models/User');

app.use(express.json());

// Sync DB
sequelize.sync()
  .then(() => {
    console.log("✅ Table created successfully");
  })
  .catch(err => console.log(err));

//get all users
//   app.get('/users', async (req, res) => {
//   const users = await User.findAll();
//   res.json(users);
// });


app.get('/users',async(req,res)=>{
    try{
        const users = await User.findAll();

        res.status(200).json({
            message:"All user fetched",
            data:users
        });
    }catch(error){
        res.status(500).json({
            error:error.message
        });
    }
});

//get data of specific id

app.get('/users/:id',async(req,res)=>{
    try{
        const { id } = req.params;

        const user = await User.findByPk(id);

        if(!user){
            return res.status(404).json({
                message:"User not found"
            });
        }
        res.json(user);
    }catch(error){
        res.status(500).json({
            error:error.message
        });
    }
});



//add user --Post api
app.post('/users',async(req,res)=>{
    try{
        const {name,email} = req.body;

        //simple validation
        if(!name || !email){
            return res.status(400).json({
                message:"Name and Email required"
            });
        }

        //insert into DB 
        const user = await User.create({
            name, 
            email
        });
        res.status(201).json({
            message:"User created",
            data:user
        });
    }catch(error){
        res.status(500).json({
            error:error.message
        });
    }
});

//update

app.put('/users/:id',async(req,res)=>{
    try{
        const { id }= req.params;
        const {name, email} = req.body;

        //check user exists
        const user = await User.findByPk(id);

        if(!user){
            return res.status(404).json({
                message:"User not found"
            });
        }
        //update data
        await User.update(
            {name,email},
            {where:{id}}
        );
        res.json({
            message:"User updated successfully"
        });
    }catch(error){
        res.status(500).json({
            error:error.message
        });
    }
});

app.delete('/users/:id',async(req,res)=>{
    try{
        const { id } =req.params;

        //check user exists
        const user =await User.findByPk(id);

        if(!user){
            return res.status(404).json({
                message:"User not found"
            });
        }

        //delete user
        await user.destroy();

        res.json({
            message:"User deleted successfull"
        });
    }catch(error){
        res.status(500).json({
            error:error.message
        });
    }
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});