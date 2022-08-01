var http = require("http");

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>Test - File -바꿈</h1>')
}).listen(55555, function () {
    console.log("[Running]Server at http://127.0.0.1:55555");
});