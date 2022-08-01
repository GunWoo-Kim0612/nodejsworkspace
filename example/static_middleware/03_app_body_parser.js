var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');

//서버생성
var app = express();



//미들웨어
app.use(cookieParser());    //쿠키 미들웨어설정
app.use(bodyParser.urlencoded({ extended: false }));      //bodyParser



//request 이벤트 리스너
///use()


//app.get('favicon.ico', (req,res) => res.status(204));
app.get('/login', function (request, response) {
    fs.readFile('login.html', function (error, data) {

        response.end(data.toString());
    });

});

app.get('/', function (request, response) {

    if (request.cookies.auth) {                   //cookie에 auth속성이 있는지 확인   (session을 아직안했으니 임시로..)
        response.send('<h1>Login Success');
    } else {
        response.redirect('/login');              //login.html로 이동
    }
});

//login Form 제출 후의 post방식 
app.post('/login', function (request, response) {
    let login = request.body.login;                 //html body 의 login 항목 정보
    let password = request.body.password;           //html body 의 password 항목 정보

    console.log('login: ', login);
    console.log('password: ', password);
    console.log(request.body);

    //로그인 유무 판별
    if (login == '1234' && password == '1234') {
        response.cookie('auth', true, {
            maxAge: 1000
        });                           //쿠키생성
        response.redirect('/');
    } else {
        response.redirect('/login');              //login.html로 이동
    }

})

app.listen(55555, function () {
    console.log('Server Running at http://127.0.0.1:55555');
});