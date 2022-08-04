var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var session = require('express-session');                   //세션 모듈 추가 




var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('case sensitive routing', true);                     //url 대소문자 구분 세팅

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//session 미들웨어 설정
app.use(session({
  secret: 'secret key',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 60 * 1000
  }
}));



app.use(express.static(path.join(__dirname, 'public')));



//rout middleware
app.use('/', indexRouter);
app.use('/users', usersRouter);

//jade 파일 렌더링
app.get('/product', function (req, res) {
  res.render('product', { title: 'Product Page' })                        //jade의 title을 출력
});


app.get('/product/insert', function (req, res) {
  // 위엔 url, 아래는 경로
  res.render('product/insert', { title: 'Insert Page' })                        //jade의 title을 출력
});

app.get('/product/edit', function (req, res) {
  // 위엔 url, 아래는 경로
  res.render('product/edit', { title: 'Edit Page' })                        //jade의 title을 출력
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
