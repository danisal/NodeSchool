var net = require('net');

function zeroFill(n) {
    return (n < 10 ? '0' : '') + n;
}

function time_server() {
    var date = new Date();
    return date.getFullYear() + '-' +
        zeroFill(date.getMonth() + 1) + '-' +
        zeroFill(date.getDate()) + ' ' +
        zeroFill(date.getHours()) + ':' +
        zeroFill(date.getMinutes());
}

var server = net.createServer(function(socket) {
    socket.write(time_server() + '\n');
    socket.end();
});
server.listen(Number(process.argv[2]));


// original solution
// var net = require('net')
//
//      function zeroFill(i) {
//        return (i < 10 ? '0' : '') + i
//      }
//
//      function now () {
//        var d = new Date()
//        return d.getFullYear() + '-'
//          + zeroFill(d.getMonth() + 1) + '-'
//          + zeroFill(d.getDate()) + ' '
//          + zeroFill(d.getHours()) + ':'
//          + zeroFill(d.getMinutes())
//      }
//
//      var server = net.createServer(function (socket) {
//        socket.end(now() + '\n')
//      })
//
//      server.listen(Number(process.argv[2]))
