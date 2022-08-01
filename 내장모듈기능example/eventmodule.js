const EventEmitter = require('events');

var custom = new EventEmitter();

custom.on('tick', function (code) {     //tick 이벤트(myevent) 발생시 이벤트핸들러 실행
    //이벤트핸들러
    console.log('이벤트 발생!!!');
});

custom.emit('tick');                    //myevent 'tick' 강제실행

