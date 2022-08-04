var socketIO = require('socket.io');
var express = require('express');
var http = require('http');
var fs = require('fs');

//좌석을 표현할 2차원배열   0: 좌석표시가 없는자리(통로) 1:빈자리 2:예약된자리
var seats = [
    [1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
];

var app = express();
var server = http.createServer(app);


//미들웨어
app.get('/', function (req, res) {
    fs.readFile("HTMLPage.html", function (error, data) {
        res.send(data.toString());
    })
});



app.get('/seats', function (req, res) {
    res.send(seats);
});

server.listen(55555, function () {
    console.log('Server running at http://127.0.0.1:55555');
})




//소켓통신을 통해 예약
var io = socketIO.listen(server);

io.sockets.on('connection', function (socket) {

    socket.on('reserve', function (data) {
        console.log('reserve');
        console.log('receive data: ', data);
        seats[data.y][data.x] = 2;

        io.sockets.emit('reserve', data);
    });
    socket.on('cancel', function (data) {
        console.log('cancel');
        console.log('data: ', data);

        seats[data.y][data.x] = 1;

        io.sockets.emit('receive  cancel', data);
    });
});