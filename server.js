const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser'); 
const appRouter = require('./betterrouter');

mongoose.connect('mongodb://localhost/blog-api');

const db = mongoose.connection;

app.use(bodyParser.urlencoded({ extended: false}));

//////////
//Your code here:
//////////

// This is where we want to the use method so we can go to whatever api and pass in the router to act as our middleware 

app.use('/api', appRouter);







db.on('open', () => {
  console.log('db connection opened!');
  app.listen(4321, () => {
    console.log('Listening on port 4321!');
  });
})

db.on('error', () => {
  console.log('error in db connection!');
})
