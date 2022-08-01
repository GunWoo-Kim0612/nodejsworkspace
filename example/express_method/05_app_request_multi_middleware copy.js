//methods
//  params 
//  query
//  headers
//  header()    
//  accepts(type)

var express = require('express');

var app = express();

//여러개의 미들웨어 사용 가능   next() 
app.use(function (request, response, next) {

    console.log('첫번째 미들웨어');
    next();
});

app.use(function (request, response, next) {

    console.log('두번째 미들웨어');
    next();
});

app.use(function (request, response) {
    console.log('세번째 미들웨어');

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>express Basic</h1>')

});



app.listen(55555, function () {
    console.log('Server Running at http://127.0.0.1:55555');
});

