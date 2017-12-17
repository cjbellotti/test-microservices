'use strict'

const http = require('http');

var server = http.createServer((req, res) => {
  console.log('Called!!!');
  res.writeHead(200, { 'Content-Type' : 'test/plain'});
  res.end('Hello World!!!');
});

server.listen(3000, () => console.log('Server listening on 3000...'));
