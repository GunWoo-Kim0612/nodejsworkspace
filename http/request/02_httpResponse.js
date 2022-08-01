//앞서만든 http module create 간결한 방법

require('http').createServer(function (request, response) {         //매개1 : request객체  매개2 : response객체    이름은 my...  일반적인 request, response 쓰세요걍
    response.writeHead(200, { 'Context-Type': 'text/html' });       //클라이언트에 보낼때 필요한 정보 담아 보내줌   응답코드, { 타입 }
    response.end('<h1>Hello Web Server with Node.js 한글</h1>');         //보냄 
}).listen(55555, function () {
    console.log('Server Running at http://127.0.0.1:55555');
});

//<h1>~~~</h1>  이런방식으로는 한계가있음 >> file module로 문서를 불러오자  

