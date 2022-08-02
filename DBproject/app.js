//모듈추가 
var express = require('express');
var ejs = require('ejs');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var fs = require('fs');




//서버생성
var app = express();

//모듈 설정 mysql  , DB연결
var client = mysql.createConnection({
    user: 'root',
    password: '1234',
    database: 'company',
});



//모듈설정 body-parser 
app.use(bodyParser.urlencoded({ extended: false }));




app.listen(55555, function () {
    console.log('Server Running at http://127.0.0.1:55555');
});



//라우터 미들웨어
app.get('/', function (_request, response) {

    fs.readFile('list.html', 'utf8', function (error, data) {

        client.query('SELECT * FROM products', function (error, result) {
            response.send(ejs.render(data, { data: result }))                                                        //두번째 data라는 속성값을 선언해서 DB정보를 results에 담아 보낸다.  html data.~~~으로 사용


        })

    })

});
app.get('/delete/:id', function (request, response) {
    client.query('DELETE FROM products WHERE id = ?', [request.params.id], function () {
        response.redirect('/');
    });
});

app.get('/insert', function (request, response) {
    fs.readFile('insert.html', 'utf8', function (error, data) {
        response.send(data);
    })
});

app.post('/insert', function (request, response) {
    client.query('INSERT INTO products (name, modelnumber, series) VALUES  (?, ?, ?)', [request.body.name, request.body.modelnumber, request.body.series], function () {
        response.redirect('/');
    });

});

app.get('/edit/:id', function (request, response) {
    fs.readFile('edit.html', 'utf8', function (error, data) {

        client.query('SELECT * FROM products WHERE id = ?', [request.params.id], function (error, result) {
            response.send(ejs.render(data, { data: result[0] }))                                               //첫번째 data는 html정보,   두번째 data라는 속성값을 선언해서 DB정보를 results에 담아 보낸다.  html data.~~~으로 사용


        })
    })
});


app.post('/edit/:id', function (request, response) {
    console.log('dd');
    client.query('UPDATE products SET name = ? WHERE id = ?', [request.body._method, request.params.id], function () {
        response.redirect('/');
    });
});
