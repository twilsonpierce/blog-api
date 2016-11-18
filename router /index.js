
const Post = require('./postRouter');
const router = require('express').Router();

router.use('/posts', require('./postRouter.js')); 
 


module.exports = router