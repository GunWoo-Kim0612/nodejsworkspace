const EventEmitter = require('events');

//timer라는 변수이름선언, 외부사용 exports
exports.timer = new EventEmitter();



setInterval(function () {
    exports.timer.emit('tick');
}, 1000);