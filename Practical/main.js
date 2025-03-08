const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('index.html', 'utf8', (err, data) => {
        res.setHeader('Content-Type', 'text/html');
        res.end(data); 
    });
});

server.listen(3000, () => {
    console.log("Server Running");
});
