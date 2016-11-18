
const Post = require('./postRouter');
const Author = require('./authorRouter');
const router = require('express').Router();

router.use('/posts', require('./postRouter.js'));
router.use('/author', require('./authorRouter'));
 


module.exports = router