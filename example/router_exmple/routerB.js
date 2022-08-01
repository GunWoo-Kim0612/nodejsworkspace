
var express = require('express');
var router = express.Router();  //외부로 반출

router.get('/index', function (request, response) {
    response.send('<h1>Index Page B</h1>')
});

exports.router = router;  