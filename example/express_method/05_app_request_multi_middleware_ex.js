

var express = require('express');

var app = express();

//여러개의 미들웨어 사용 가능   next() 
app.use(function (request, response, next) {

    request.number = 52;
    response.number = 274;
    next();

});

app.use(function (request, response) {

    response.send('<h1>' + request.number + ' : ' + response.number + '</h1>')
});




app.listen(55555, function () {
    console.log('Server Running at http://127.0.0.1:55555');
});

