
//java에서 import와 같은개념
var module = require('./module.js');  //경로에 있는 exports를 사용하겠다.

console.log('abs(-273) = %d', module.abs(-273));
console.log('circleArea(3) = %d',module.circleArea(3));