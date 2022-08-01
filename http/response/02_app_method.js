var http = require('http');
var url = require('url');

http.createServer(function (request, response) {
    if (request.method == 'GET') {                   //요청방식이 GET인지 POST인지... 
        console.log('GET요청');
    } else if (request.method = "POST") {
        console.log('POST요청');
    }
}).listen(55555, function () {
    console.log('Server Running at http://127.0.0.1:55555'); //5000번대 이상   콜백함수를 통해 서버가 구동되는 시작에 기능 추가      서버실행이후 중단 > 터미널에선 ctrl + c
});

//request로 요청받은 정보들은 url을 포함하고있다  사용할땐  parsing을 거쳐야한다