var express = require('express');
var app = express();

//확장자 뺴도 됨  경로표시 주의 ./
app.use('/a', require("./routerA.js").router);
app.use('/b', require("./routerB.js").router);
app.use('/c', require("./routerC.js").router);

app.listen(55555, function () {
    console.log('Server Running at http://127.0.0.1:55555');
})