

var express = require('express');

var app = express();


app.use(function (request, response) {

    let agent = request.header('User-Agent');

    //브라우저 크롬인지 아닌지...
    if (agent.toLocaleLowerCase().match(/chrome/)) {
        response.send('<h1> Hello Chrome</h1>')
    } else {
        response.send('<h1> Hello Others</h1>')
    }

});

app.listen(55555, function () {
    console.log('Server Running at http://127.0.0.1:55555');
});

// app.get('/favicon.ico', (req, res) => res.status(204));
