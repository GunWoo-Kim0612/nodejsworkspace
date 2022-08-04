//모듈 추가
var http = require('http');
var fs = require('fs');
var socketIO = require('socket.io');


var server = http.createServer(function (req, res) {
    fs.readFile('HTMLPage.html', function (error, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    })

}).listen(55555, function () {
    console.log('Server running at http://127.0.0.1:55555');
});

var io = socketIO.listen(server);
io.sockets.on('connection', function (socket) {
    socket.on('message', function (data) {
       
        io.sockets.emit('message', data);
       

    });
})