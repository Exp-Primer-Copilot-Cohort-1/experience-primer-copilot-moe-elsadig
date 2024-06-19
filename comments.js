// create web server
// const express = require('express');
// const app = express();

// // get body-parser
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

// // get comments
// const comments = require('./comments')
// app.get('/comments', (req, res) => {
//   res.json(comments.getComments());
// });

// // post comments
// app.post('/comments', (req, res) => {
//   const {name, comment} = req.body;
//   comments.addComment(name, comment);
//   res.json(comments.getComments());
// });

// // listen port 3000
// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });