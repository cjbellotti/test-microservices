var http = require('http');

var server = http.createServer((req, res) => {
  console.log(`${req.url} - ${req.method}`);
  res.writeHead(200, {
    'Content-Type' : 'text/plain'
  });
  res.end('Hello World\n');
});

server.listen(8000);
