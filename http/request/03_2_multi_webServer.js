var fs = require('fs');

var http = require('http');

http.createServer(function (request, response) {
    fs.readFile('image.jfif', function (error, data) {
        response.writeHead(200, { 'Context-Type': 'image/jfif' });
        response.end(data);
    })
}).listen(55555, function () {
    console.log('run');
})

http.createServer(function (request, response) {
    fs.readFile('test.html', function (error, data) {
        response.writeHead(200, { 'Context-Type': 'text/html' });
        response.end(data);
    })
}).listen(55556, function () {
    console.log('run');
})
