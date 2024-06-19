// create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var commentsPath = path.join(__dirname, 'data/comments.json');

// use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// get comments
app.get('/api/comments', function(req, res) {
  fs.readFile(commentsPath, 'utf8', function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

// add comment
app.post('/api/comments', function(req, res) {
  fs.readFile(commentsPath, 'utf8', function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var comments = JSON.parse(data);
    var newComment = {
      id: Date.now(),
    };
  });
});