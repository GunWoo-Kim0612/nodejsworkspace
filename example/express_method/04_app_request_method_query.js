

var express = require('express');

//미들웨어가 처리하고있음
var app = express();

//매개변수 next 추가
app.use(function (request, response, next) {


    //이전에 하던 getParameter 와 동일하네여
    let name = request.query.name;          //쿼리의 name 속성을 받아오겠다.
    let region = request.query.region;

    response.send('<h1>' + name + '-' + region + '</h1>')
});

app.listen(55555, function () {
    console.log('Server Running at http://127.0.0.1:55555');
});

