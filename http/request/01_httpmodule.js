//http 서버 생성 코드 냅다 암기
var http = require('http');

var server = http.createServer();                                                                       //http를 이용한 웹서버 생성   PORT NUM 필요(임의의 중복되지 않는)

server.listen(55555, function () {
    console.log('Server Running at http://127.0.0.1:55555');                                            //5000번대 이상   콜백함수를 통해 서버가 구동되는 시작에 기능 추가      서버실행이후 중단 > 터미널에선 ctrl + c
});

var test = function () {
    server.close();
}

setTimeout(test, 10000);    //10초후 서버종료