var fs = require("fs");
var http = require("http");
var jade = require('jade');

http
    .createServer(function (request, response) {
        fs.readFile("jadePage.jade", "utf-8", function (error, data) {
            var fn = jade.compile(data);

            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(fn({
                name: 'Kimgw',
                description: 'Hello World!'
            }));
        });
    }).listen(63336, function () {
        console.log("[Running]Server at http://127.0.0.1:63336");
    });