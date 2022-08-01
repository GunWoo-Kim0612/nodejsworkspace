//모듈추가
var express = require('express');
var session = require('express-session');
var app = express();


//session 미들웨어 설정
app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60 * 1000
    }
}));

app.use(function (request, response) {
    request.session.now = (new Date()).toUTCString();                           //
    response.send(request.session);                                             //세션정보 클라에 보내줌
});

app.listen(55555, function () {
    console.log('Server running at http://127.0.0.1:55555');
});