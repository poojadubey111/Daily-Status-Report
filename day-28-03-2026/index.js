const express = require('express');
const app = express();

const PORT = 3000;

//single routing 

// const router = express.Router();

// router.get('/',(req,res,next)=>{
//     console.log("Router Working");
//     res.end();
// })mu


//mltiple routing 
// const userRouter = express.Router();
// const adminRouter = express.Router();
// const studentRouter = express.Router();

// userRouter.get('/',(req,res,next)=>{
//     console.log("User Router Working");
//     res.end();
// })
// adminRouter.get('/',(req,res,next)=>{
//     console.log("Admin Router Working");
//     res.end();
// })

// studentRouter.get('/',(req,res,next)=>{
//     console.log("Students Router Working");
//     res.end();
// })

// app.use('/user',userRouter);
// app.use('/admin',adminRouter);
// app.use('/student',studentRouter);

//Use All Routers in Main file

const userRoutes = require('./routes/userRoutes');
// const productRoutes = require('./routes/productRoutes');
// const orderRoutes = require('./routes/orderRoutes');

app.use(express.json());
//Mount routers
app.use('./users',userRoutes);
// app.use('./products',productRoutes);
// app.use('./orders',orderRoutes);




app.listen(3000,(req,res)=>{
    console.log('Sever connected on port 3000...!');
})