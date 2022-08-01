var http = require('http');
var url = require('url');

http.createServer(function (request, response) {

    var query = url.parse(request.url, true).query;         //request로 요청받은 정보들은 url을 포함하고있다  사용할땐  parsing을 거쳐야한다        이후.query를 통해 queryString 가져옴 - true : url 객체의 query 속성을 객체 형식으로 가져옵니다.

    response.writeHead(200, { 'Context-Type': 'text/html' });
    response.end('<h1>' + JSON.stringify(query) + '</h1>');             //jquery 복습 필요...
}).listen(55555, function () {
    console.log('Server Running at http://127.0.0.1:55555');
});

