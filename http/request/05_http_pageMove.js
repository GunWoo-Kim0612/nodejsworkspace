require('http').createServer(function (request, response) {

    response.writeHead(302, { 'Location': 'http://www.daum.net' });
    response.end();
}).listen(55555, function () {
    console.log('run');
});