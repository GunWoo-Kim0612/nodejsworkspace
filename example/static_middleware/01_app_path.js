var express = require('express');

var app = express();



//현재 경로 example의 자원을 제공하는 public 디렉토리를 static으로 지정... 이후 재사용으로 편리하넹

app.use(express.static(__dirname + '/public'));

app.use(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<img src="/image.jpg" width="100%" />');           //경로 선택해줄 필요가 없다            
});

app.listen(55555, function () {
});

