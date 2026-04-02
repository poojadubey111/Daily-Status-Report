const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.post('/',userController.createUser);
router.get('/',userController.getAllUser);
router.get('/:id/assigned-tasks',userController.getAssignedTasks);
router.get('/:id/tasks',userController.getUserTasks);

router.put('/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;