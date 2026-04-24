const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controllers');


router.post('/user',controller.createUser);
router.post('/post',controller.createPost);
router.get('/users',controller.getUsers);

module.exports = router;