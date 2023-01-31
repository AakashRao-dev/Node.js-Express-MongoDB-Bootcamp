const http = require('http');
const fs = require('fs');
const url = require('url');

// FILES

// SERVER

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === '/' || pathName === '/overview') {
    res.end('Hello from the OVERVIEW!');
  } else if (pathName === '/product') {
    res.end('This is the PRODUCT');
  } else {
    res.writeHead('404', {
      'Content-type': 'text/html',
      'my-own-header': 'Hey-there',
    });
    res.end('<h1>Sorry for inconvenience, Page not Found!!</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Server is running');
});
