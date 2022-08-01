var http = require('http');


http.createServer(function (request, response) {
    response.writeHead(200,
        {
            'Context-Type': 'text/html',
            'Set-Cookie': ['breakfast = toast', 'dinner = chicken']
        });

    response.end('<h1>' + request.headers.cookie + '</h1>');
}).listen(55555, function () {
    console.log('run');
});