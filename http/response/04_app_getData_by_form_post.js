var http = require('http');
var fs = require('fs');


http.createServer(function (request, response) {

    if (request.method == 'GET') {
        console.log('get방식');         //url을 통해 이동하면get방식임 ㅇㅇ

        fs.readFile('04_HTML.html', function (error, data) {
            response.writeHead(200, { 'Context-Type': 'text/html' });
            response.end(data);
        });
    } else if (request.method == "POST") {
        console.log('post');

        request.on('data', function (data) {             //on > data를 받아서           매개변수 error넣으면 뭐가 이상함...on은 error를 매개하지않나??
            response.writeHead(200, { 'Context-Type': 'text/html' });
            response.end('<h1>' + data + '</h1>')
        });
    }
}).listen(55555, function () {
    console.log('run');
})