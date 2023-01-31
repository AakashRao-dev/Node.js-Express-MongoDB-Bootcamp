const http = require('http');
const fs = require('fs');
const url = require('url');

// SERVER

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === '/' || pathName === '/overview') {
    res.end('OVERVIEW!');
  } else if (pathName === '/product') {
    res.end('This is the PRODUCT');
  } else if (pathName === '/api') {
    // READING DATA FROM JSON FILE
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);
  } else {
    res.writeHead(400, {
      'Content-type': 'text/html',
      'my-own-header': 'Hey-there',
    });
    res.end('<h1>Sorry for inconvenience, Page not Found!!</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Server is running');
});
