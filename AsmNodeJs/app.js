var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const indexRouter = require('./routes/index');


// API
const userAPIRouter = require('./routes/api/UserAPI');
const productAPIRouter = require('./routes/api/ProductAPI');
const categoryAPIRouter = require('./routes/api/CategoryAPI');

// cpanel
const userCpanelRouter = require('./routes/cpanel/UserCpanel');
const productCpanelRouter = require('./routes/cpanel/ProductCpanel');
const categoryCpanelRouter = require('./routes/cpanel/CategoryCpanel');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// http:localhost:3000/
app.use('/', indexRouter);


// http://localhost:3000/api/user
app.use('/api/user', userAPIRouter);

// http://localhost:3000/api/product
app.use('/api/product',productAPIRouter );

// http://localhost:3000/api/category
app.use('/api/category',categoryAPIRouter );

// http://localhost:3000/cpanel/user
app.use('/cpanel/user', userCpanelRouter);

// http://localhost:3000/cpanel/product
app.use('/cpanel/product', productCpanelRouter);

// http://localhost:3000/cpanel/category
app.use('/cpanel/category', categoryCpanelRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
