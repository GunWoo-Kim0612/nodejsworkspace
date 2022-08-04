var socketIO = require('socket.io');
var fs = require('fs');
var http = require('http');

var server = http.createServer(function (req, res) {
    fs.readFile('HTMLPage.html', function (error, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });

}).listen(55555, function () {
    console.log('Server Running at http://127.0.0.1:55555');
});

// var io = socketIO.listen(server);
// io.sockets.on('connection', function (socket) {
//     socket.on('rint', function (data) {
//         //public 통신
//         // io.sockets.emit('smart', data);
//         //  console.log('Client Send Date : ', data);

//         //broadcast 통신   전송한 클라측 제외 모두 데이터 받음
//         socket.broadcast.emit('smart', data);               //sockets -> socket
//         console.log('Client Send Date : ', data);
//     });
// });


var i = 0;
var id = Array();

var io = socketIO.listen(server);
io.sockets.on('connection', function (socket) {

    id[i] = socket.id;
    socket.emit('setname', 'user' + i);
    i = i + 1;

    socket.on('rint', function (text, num) {
        io.to(id[num]).emit('smart', text);
    })
})