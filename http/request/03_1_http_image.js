var fs = require('fs');

var http = require('http');

http.createServer(function (request, response) {
    console.log('ㅇ');
    fs.readFile('image.jfif', function (error, data) {
        response.writeHead(200, { 'Content-Type': 'image/jfif' });
        response.end(data);
    })
}).listen(55555, function () {
    console.log('run');
});