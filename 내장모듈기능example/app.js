//모듈추가할떄 확장자 빼는게 일반적
var rint = require('./rint');

rint.timer.on('tick', function (code) {
    console.log("이벤트 발생!!");
});