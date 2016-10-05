var http = require('http');
var url = require('url');

http.createServer(function (request, response) {
  // assign request.url to variable url
  url = url.parse(request.url, true);
  // log contents of url to console
  console.log(url);
}).listen(+process.argv[2]);
