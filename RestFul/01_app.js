//모듈추가
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');


//임시 DB역할 추가          CRUD 역할 수행
var DummyDB = (function () {
    var DummyDB = {};                                                                            //객체 선언        직접 값을 넣어 사용할 땐 {key:value, key:value .... }
    var storage = [];
    var count = 1;

    //get 사용자조회  
    DummyDB.get = function (id) {                                                                //DummyDB에  value 값을 지정     key 는 get      value 는 function(id) 가되는 형식...????

        console.log('id: ', id);
        //id 가 존재?     특정 사용자 조회
        if (id) {
            id = (typeof id == 'string') ? Number(id) : id;                                     //typeof : 스크립트 함수 (타입체크),  Number : 스크립트 함수  문자열 -> 숫자형          타입체크 문자열이면 숫자형으로  아니면 그대로    
            for (var i in storage) {                                                            //storage 배열
                if (storage[i].id == id) {                                                      //스토리이즤 id와 매개변수로 받은 id가 동일하면?
                    return storage[i];
                }
            }
            //id 를 받지 않았을 경우 전체 사용자 조회
        } else {
            return storage;
        }
    }
    DummyDB.insert = function (data) {                                                          //DummyDB에  value 값을 지정     key 는 insert   value 는 function(data) 
        //post  
        data.id = count++;                                                                      //id 값 생성
        storage.push(data);                                                                     //storage에 추가
        return data;
    }
    DummyDB.delete = function (id) {                                                            //DummyDB에  value 값을 지정     key 는 remove   value 는 function(id) 
        id = (typeof id == 'string') ? Number(id) : id;
        console.log('id: ', id);
        console.log('storage[i].id: ', storage[i]);

        for (var i in storage) {
            if (storage[i].id == id) {
                console.log('storage[i].id: ', storage[i]);
                storage.splice(i, 1);                                                           //스토리지 배열 잘라내기 i인덱스  1개
                return true;
            }
        }
        return false;
    }
    //DummyDB객체를 반환
    return DummyDB;
})();//익명함수의 자동호출기능










//서버생성
var app = express();


//bodyParser미들웨어 설정
app.use(bodyParser.urlencoded({ extended: false }));

//Router 미들웨어 설정           RestFul 방식...
//Read전체조회
app.get('/user', function (_request, response) {                                                  // uri   '/user' 요청에 대해  get방식으로 처리
    response.send(DummyDB.get());                                                               //DummyDB 메소드  
    console.log('Read동작');
});
//Read  id로 조회
app.get('/user/:id', function (request, response) {                                              // uri   '/user/:id' 요청에 대해 get방식으로 처리
    console.log('Read동작');

    response.send(DummyDB.get(request.params.id));                                              //DummyDB 메소드 get()   매개변수 형태 주의
});

//Create
app.post('/user', function (request, response) {                                                // uri   '/user' 요청에 대해 post방식으로 처리     post 방식 form 데이터를 통해 전달되는데이터
    console.log('Create 동작');

    var name = request.body.name;                                                               //body-parser 미들웨어의 기능으로  html body의 속성을 가져올 수 있다.
    var region = request.body.region;

    //name , region 값이 정상적으로넘어왔다면
    if (name && region) {
        response.send(DummyDB.insert({
            name: name,
            region: region
        }));                           //DummyDB 메소드 insert()  매개변수 형태 주의              //객체형태 {} 

    } else {
        throw new Error('error');                                                               //스크립트 예외처리는 이런식으로도 합니다....
    }
    console.log('name: ', name);
});

//Update
app.put('/user/:id', function (request, response) {                                             // uri   '/user/:id' 요청에 대해 put방식으로 처리
    console.log('Update동작');

    var id = request.params.id;
    var name = request.body.name;
    var region = request.body.region;

    var item = DummyDB.get(id);                                                                 //get메소드를 통해 얻어온 값을 저장  Storage i번째 id or storage 배열 

    //수정된 정보 업데이트
    item.name = name || item.name;                                                              //name이 값존재 -> true  (item.name =  name)  or  name값 x name -> false   item.name = item.name;   기존값 사용                                                          
    item.region = region || item.region;

    response.send(item);                                                                        //클라쪽 전달
});

//Delete
app.delete('/user/:id', function (request, response) {                                          // uri   '/user/:id' 요청에 대해 delete방식으로 처리
    console.log('Delete 동작');

    response.send(DummyDB.delete(request.params.id));
});





app.listen(55555, function () {
    console.log('Server Running at http://127.0.0.1:55555')
})