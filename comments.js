// Create web server without libraries
// Run with: node comments.js

// Load modules
const http = require('http');
const fs = require('fs');

// Create server
http.createServer((req, res) => {
    // Read file
    fs.readFile('index.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
}).listen(8080);

console.log('Server running at http://localhost:8080/');