var fs = require('fs');
var url = require('url');

//request 객체 안의 url이란 속성이 존재함... 

//어떤 요청인지에 따라 index.html 또는 other.html을 서비스 하는 예제
require('http').createServer(function (request, response) {

    var my_pathname = url.parse(request.url).pathname               //주소값중 마지막 정보를 가져옴            pathname 은 url의 속성이름  

    if (my_pathname == '/') {                                        //path 정보가 root?
        fs.readFile('01_index.html', function (error, data) {
            response.writeHead(200, { 'Context-Type': 'text.html' });
            response.end(data);
        });
    } else if (my_pathname == '/01_otherPage') {
        fs.readFile('01_otherPage.html', function (error, data) {
            response.writeHead(200, { 'Context-Type': 'text.html' });
            response.end(data);
        });
    }


}).listen(55555, function () {
    console.log('Server Running at http://127.0.0.1:55555');                                            //5000번대 이상   콜백함수를 통해 서버가 구동되는 시작에 기능 추가      서버실행이후 중단 > 터미널에선 ctrl + c
})