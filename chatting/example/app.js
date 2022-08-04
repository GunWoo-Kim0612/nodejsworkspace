var socketIO = require('socket.io');
var fs = require('fs');
var http = require('http');


//http서버에서 소켓 연결 요청...  소켓연결코드는 html에 script로 작성됨
var server = http.createServer(function (req, res) {
    fs.readFile('HTMLPage.html', function (error, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });

}).listen(55555, function () {
    console.log('Server running at http://127.0.0.1:55555');
});


//on : 소켓 이벤트 receive
//emit : 소켓 이벤트 강제발생 send

var io = socketIO.listen(server);
io.sockets.on('connection', function (socket) {

    //rint 란 이벤트 받아옴
    socket.on('rint', function (data) {
        socket.emit('smart', data);
        console.log('Client Send Date : ', data);
    })
    // smart 란 이벤트 강제 발생
});


