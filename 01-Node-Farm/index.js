const http = require('http');
const fs = require('fs');

// FILES

// SERVER

const server = http.createServer((req, res) => {
  res.end('Hello from the server!');
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Server is running');
});
