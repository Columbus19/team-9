var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser'); // for html submit forms
var logger = require('morgan');
//let dataFile = require('./databases/people-data.json');
//let stringData = JSON.stringify(dataFile);
const fs = require('fs');
const fileContents = fs.readFileSync('./databases/people-data.json', 'utf8');
const data = JSON.parse(fileContents);
//console.log(data);
//console.log(stringData);
var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// configure the app to use bodyParser()
// app.use(bodyParser.urlencoded({
//   extended: true
// }));
// app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
});

app.use('/', indexRouter);
app.use('/login', loginRouter);

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
