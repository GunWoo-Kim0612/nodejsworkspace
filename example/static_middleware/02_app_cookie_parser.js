var express = require('express');
var cookieParser = require('cookie-parser');

//서버생성
var app = express();



//미들웨어
//함수형태로 쿠키 미들웨어 설정
app.use(cookieParser());

//request 이벤트 리스너

///use()

//app.get('favicon.ico', (req,res) => res.status(204));

app.get('/getCookie', function (request, response) {
    //쿠키정보가 객체형태로 넘어옴을 확인할 수 있다.
    response.send(request.cookies);
});

app.get('/setCookie', function (request, response) {
    //쿠키생성 
    response.cookie('string', 'cookie', {        //String타입
        maxAge: 6000,                            //유효기간 설정       
        secure: true                             //http 전송x,  https인경우 전송됨  (s붙고 안붙고는 내부적으로 인증되는 절차가 있다고합디다)  보안강화
    });
    response.cookie('json', {                    // json타입 
        name: 'cookie', property: 'delicious'
    });

    //응답
    response.redirect('/getCookie');
});

app.listen(55555, function () {
    console.log('Server Running at http://127.0.0.1:55555');
});