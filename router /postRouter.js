// This is where we are creating a postRouter for our posts 
const router = require('express').Router();
const Post = require('./models').Post;


const getPost = (req, res) => {
	Post.find({}, (err, data)=>{
		if(err) {
			console.log('there was an error getting data');
			res.send()
		} else {
			console.log('success retrieving data', data)
			res.send(data)
			}
		})
}

router.route("/")
	.get(getPost)


module.exports = router; 