var http = require('http');

http.createServer(function (request, response) {

    if (request.headers.cookie) {                                                            //쿠키정보 확인
        var cookie = request.headers.cookie.split(';').map(function (element) {              //쿠키정보를 세미콜론 기준으로 분리 >> split() 배열형태반환 (element)
            var _element = element.split('=');                                                //받아온 element '=' 기준 split

            return {
                key: _element[0],
                value: _element[1],
            }
        });

        response.end('<h1>' + JSON.stringify(cookie) + '</h1>');

    } else {                                                                                 //쿠키정보x  
        response.writeHead(200, {                                                            //쿠키생성
            'Content-Type': 'text/html',
            'Set-Cookie': ['breakfast = toast', 'dinner = chicken']
        });
    }


}).listen(55555, function () {
    console.log('run');
});