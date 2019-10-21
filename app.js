var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var inventarioRouter = require('./routes/inventario');
var proveedorRouter = require('./routes/proveedor');
var personalRouter = require('./routes/personal');
var unidadRouter = require('./routes/unidad');

// schemas db 
var usuario = require('./model/usuario');
var inventario = require('./model/inventario');
var inventario = require('./model/proveedor');
var personal = require('./model/personal');
var unidad = require('./model/unidad');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/inventario', inventarioRouter);
app.use('/proveedor', proveedorRouter);
app.use('/personal', personalRouter);
app.use('/unidad', unidadRouter);

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