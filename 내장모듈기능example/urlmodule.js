var url = require('url');

var parseObject = url.parse('http://www.hanbit.co.kr/store/books/look.php?p_code= B4250257160');

console.log('parseObject: ', parseObject);



//url의 쿼리정보 확인
var querystring = require('querystring');

console.log('querystring: ', querystring.parse(parseObject.query));


