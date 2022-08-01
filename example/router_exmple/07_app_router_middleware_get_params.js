var express = require('express');


var app = express();


app.get('/page/:id', function (request, response) {
    console.log('1');
    let id = request.params.id;

    response.send('<h1>' + id + 'page</h1>')
});




app.listen(55555, function () {
    console.log('Server Running at http://127.0.0.1:55555');
});


// app.get('/favicon.ico', (request, response) => response.status(204));