// this is where we are going to create our router for authors
const router = require('express').Router();
const Author = require('../models').Author;

const getAuthor = (req,res)=>{
	Author.find({}, (err,data) => {
		if(err){
			console.log('there was an error getting authors')
			res.send('Error')
		} else {
			console.log('Successful getting authors!',data)
			res.send(data)
		}
	})
}

const getAuthorAlphabetically = (req,res)=>{
	Author.find({}).sort({name: 'asc'}).exec((err,data) =>{
		if(err){
			console.log('there was an error getting authors alphabetically')
			res.send('Error')
		} else {
			console.log('Successful getting authors alphabetically',data)
			res.send(data)
		}
	})
}


const getAuthorById = (req,res)=>{
	console.log(req.params.id, 'this is the author id');
	Author.find({_id: req.params.id}, (err,data) =>{
		if(err){
			console.log('there was an error getting author ID')
			res.send('Error')
		}else{
			console.log('Successful getting author ID',data)
			res.send(data)
		}
	})
}


router.route("/")
	.get(getAuthor)
router.route("/sort/a-z")
	.get(getAuthorAlphabetically)
router.route("/:id")
	.get(getAuthorById)

module.exports = router; 