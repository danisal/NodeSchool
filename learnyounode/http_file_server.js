var http = require('http');
var fs = require('fs');

var file = process.argv[3];

var server = http.createServer(function (request, response){
  fs.createReadStream(file).pipe(response);
});
server.listen(Number(process.argv[2]));


// official solution
// var http = require('http')
// var fs = require('fs')
//
// var server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })
//
//   fs.createReadStream(process.argv[3]).pipe(res)
// })
//
// server.listen(Number(process.argv[2]))
