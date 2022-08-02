//모듈추가
var mysql = require('mysql');

//DB연동
var client = mysql.createConnection({
    user: 'root',
    password: '1234',
    database: 'company'   //바로 접근 가능      설치시 포트번호 변경했을 경우 포트속성을 적용해주어야 한다  기본 port=3306
    // port:3306
});

//사용할 데이터 접근
// client.query('USE company');

client.query('INSERT INTO products (name, modelnumber, series) values(?, ?, ?)', ['Name', 'modelnumber', 'series']);                       //[]로 ?에 대한 값 전달         prepared statement 와 동일하다

client.query('SELECT * FROM products', function (error, result, _fields) {
    if (error) {
        console.log('error: ', error);
    } else {
        console.log(result);
    }
});