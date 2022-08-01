var express = require('express');


var app = express();


app.get('/index', function (request, response) {
    console.log('1');

    response.send('<h1>Index Page 한글잘나오넹</h1>')

});


app.get('*', function (request, response) {
    console.log('1');

    response.send('<h1>ERROR - Page Not Found</h1>')

});




app.listen(55555, function () {
    console.log('Server Running at http://127.0.0.1:55555');
});


// app.get('/favicon.ico', (request, response) => response.status(204));
