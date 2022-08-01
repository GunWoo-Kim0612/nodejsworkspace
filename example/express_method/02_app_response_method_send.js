var express = require('express');

var app = express();


app.use(function (request, response) {

    let output = [];
    for (let i = 0; i < 3; i++) {
        output.push({
            count: i,
            name: 'name - ' + i
        });
    }
    //응답코드를 넣어서 사용가능
    response.status(200).send(output);

});

app.listen(55555, function () {
    console.log('Server Running at http://127.0.0.1:55555');
});

