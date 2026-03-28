const express = require('express');
const router = express.Router();

//Get All Users
// router.get('/',(req,res)=>{
//     res.send('Get all users');
// });

//Get user by id 
// router.get('/:id',(req,res)=>{
//     res.send(`Get user ${req.params.id}`);
// });

//Post create user
// router.post('/',(req,res)=>{
//     res.send('User created');
// });


const userController = require('../controllers/userController');

//Routes 
router.get('/',userController.getUsers);
router.get('/:id',userController.getUserById);
router.post('/',userController.createUser);

module.exports = router;