// This is where we are creating a postRouter for our posts 
const router = require('express').Router();
const Post = require('../models').Post;


const getPost = (req, res) => {
	Post.find({}, (err, data)=>{
		if(err) {
			console.log('there was an error getting data')
			res.send()
		} else {
			console.log('We got all the data!', data)
			res.send(data)
			}
		})
}

const getPostId = (req,res) =>{
	console.log(req.params.id);
	Post.find({_id: req.params.id}, (err,data) =>{
		if(err){
			console.log('error getting post id');
			res.send('Error!')
		} else {
			console.log('We got the ID!', data)
			res.send(data)
		}
	})
}

const getByDate = (req,res) =>{
	console.log(req.params.date, 'this is the date!!!!');
	Post.find({}).sort({date:'asc'}).exec((err,data) =>{
		if(err){
			console.log('error getting post by date');
			res.send('Error');
		} else {
			console.log('We got the post by date!',data);
			res.send(data)
		}
	})
}

const getByTitle = (req,res) =>{
	console.log(req.params.title, 'this is the title!!!');
	Post.find({}).sort({title: 'asc'}).exec((err,data) =>{
		if(err){
			console.log('error getting post by title');
			res.send('Error')
		}else{
			console.log('We got the post by title!',data);
			res.send(data)
		}
	})
}

const getPostTags = (req,res) =>{
	Post.find({tags:'react'}, (err,data) =>{
		if(err){
			console.log('there was an error getting post tags')
			res.send('Error')
		}else{
			console.log('Successful getting post with tags react',data)
			res.send(data)
		}
	})
}


const getPostWithAuthor = (req,res) =>{
	Post.find({}).populate('author').exec((err,data) =>{
		if(err){
			console.log('error getting post with author')
			res.send('Error')
		} else {
			console.log('Successful getting post with author',data)
			res.send(data)

		}
	})
}


const postIt = (req,res) =>{
	res.send({message:'Yay New Post!!'})
}

const deletePost =(req,res) =>{
	Post.remove({_id: req.params.id},(err,data) =>{
		if(err){
			console.log('there was an error deleting your post')
			res.send('Error')
		} else {
			console.log('Successful deleting your post!', data)
			res.send(data)
		}
	})
}

const updatePost = (req, res) =>{
	Post.findOneAndUpdate({_id:req.params.id}, {title:req.body.title},(err,data)=>{
		if(err){
			console.log('there was an error updating your post')
			res.send('Error')
		}else{
			console.log('Successful updating your post')
			res.send(data)
		}
	
	})
}

//USING THE GET METHOD ON THE ROUTER TO RETRIEVE THE FOLLOWING DATA 

//USING THE POST METHOD ON THE ROUTER TO POST THE FOLLOWING DATA 

router.route("/")
	.get(getPost)
	.post(postIt)
	

router.route("/post-with-authors")
	.get(getPostWithAuthor)

router.route("/:id")
	.get(getPostId)
	.delete(deletePost)
	.put(updatePost)
	

router.route("/sort/by-date")
	.get(getByDate)

router.route("/sort/a-z")
	.get(getByTitle)
router.route("/tags/react")
	.get(getPostTags)






module.exports = router; 