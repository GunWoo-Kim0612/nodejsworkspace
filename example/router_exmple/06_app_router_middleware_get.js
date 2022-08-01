var express = require('express');


var app = express();


app.get('/a', function (request, response) {
    console.log('a로이동');
    response.send('<a href="/b"> GO TO B</a>');
});

app.get('/b', function (request, response) {
    console.log('b로이동');
    response.send('<a href="/a"> GO TO A</a>');
});



app.listen(55555, function () {
    console.log('Server Running at http://127.0.0.1:55555');
});


// app.get('/favicon.ico', (request, response) => response.status(204));
