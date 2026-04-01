const router= require('express').Router();
const ctrl=require('../controllers/post.controllers');

router.post('/',ctrl.createPost);
router.get('/',ctrl.getPosts);

module.exports = router;