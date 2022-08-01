var express = require('express');


//서버생성
var app = express();

//미들웨어
//request 이벤트 리스너
///use()
//app.get('favicon.ico', (req,res) => res.status(204));



app.listen(55555, function () {
    console.log('Server Running at http://127.0.0.1:55555');
});