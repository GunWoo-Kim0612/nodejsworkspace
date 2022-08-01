var express = require('express');


//라우터 모듈화해 사용하기
var app = express();

let routerA = express.Router();
let routerB = express.Router();

//라우터 B에 대한 기능 get방식
routerA.get('/index', function (request, response) {
    response.send('<h1>Index Page A</h1>')

});


//라우터 B에 대한 기능 get방식
routerB.get('/index', function (request, response) {
    response.send('<h1>Index Page B</h1>')

});

//라우터 a에 대한 요청이 있을시  routerA실행
app.use('/a', routerA);
app.use('/b', routerB);







app.listen(55555, function () {
    console.log('Server Running at http://127.0.0.1:55555');
});


// app.get('/favicon.ico', (request, response) => response.status(204));
