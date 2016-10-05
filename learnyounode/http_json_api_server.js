var http = require('http');
var url = require('url');

function parseTime(time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    };
}

function unixTime(time) {
    return {
        unixtime: time.getTime()
    };
}

var parseQuery = function(url) {
    switch (url.pathname) {
        case '/api/parsetime':
            return parseTime(new Date(url.query.iso));
        case '/api/unixtime':
            return unixTime(new Date(url.query.iso));
        default:
            return 'please enter a valid endpoint url';

    }
};

var server = http.createServer(function(request, response) {
    if (request.method === 'GET') {
        response.writeHead(200, { 'content-type': 'application/json' });
        url = url.parse(request.url, true);
        response.end(JSON.stringify(parseQuery(url)));
    } else {
        response.writeHead(404);
        response.end();
    }
});
server.listen(Number(process.argv[2]));
