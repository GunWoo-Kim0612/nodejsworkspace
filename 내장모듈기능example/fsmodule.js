var fs = require('fs');

var text = fs.readFileSync('testfile.txt', 'utf-8');
console.log('text: ', text);


fs.readFile('testfile.txt', 'utf-8', function (error, data) {
    console.log(data);
});

var data = 'Hello';

fs.writeFile('TextFileOtherWrite.txt', data, 'utf-8', function (error) {
    console.log('write file async complete ');
});

//sync방식  동기식
fs.writeFileSync('TextFileOtherWriteSync.txt', data, 'utf-8')
console.log('write file sync complete ');

