var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var multipart = require("connect-multiparty");
const { request } = require("http");
const { response } = require("express");

// 서버 생성
var app = express();

// 쿠키 미들웨어 설정

// body parser 미들웨어 설정
app.use(bodyParser.urlencoded({ extended: false }));

// multipart 미들웨어 설정
app.use(multipart({ uploadDir: __dirname + "/upload" }));

app.get("/", function (request, response) {
  fs.readFile("01_HTMLPage.html", function (error, data) {
    response.send(data.toString());
  });
});

app.post("/", function (req, res) {
  console.log(req.body);
  console.log(req.files);

  var comment = req.body.comment;
  var imageFile = req.files.image;

  if (imageFile) {
    var name = imageFile.name;
    var path = imageFile.path;
    var type = imageFile.type;

    if (type.indexOf('image') != -1) {                                  //타입에 image 포함되어 있다면
      var outputPath = __dirname + '/upload/' + Date.now() + '_' + name;  //기본파일명에 시간정보를 붙여 업로드 되도록 처리
      console.log(' __dirname: ', __dirname);

      fs.rename(path, outputPath, function (error) {
        response.redirect("/");                                         //페이지이동
      });
    } else {
      fs.unlink(path, function (error) {

        response.sendStatus(400);
      });

    }
  } else {                                                              //img파일이 아닌경우
    response.sendStatus(404);
  }

});

app.listen(55555, function () {
  console.log("Server Running  at http://127.0.0.1:55555");
});