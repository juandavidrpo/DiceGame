const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

/**
 * Representa la conexión a la base de datos de mongodb.
 * @version 1.0.0 2022-03-01
 * @author Juan David Rojas.
 */
const mongodb = 'mongodb://localhost/game';
mongoose
    .connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

const app = express();

/**
 * Representa la configuración del motor de plantillas.
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('json spaces', 2);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Representa las rutas de las funciones.
 */
app.use('/creategame', require('./routes/index'));
app.use('/create-game', require('./routes/createGame'));
app.use('/status', require('./routes/gameStatus'));
app.use('/winner', require('./routes/winner'));
app.use('/startgame', require('./routes/startGame'));

/**
 * Representa la captura de 404 y reenvía al controlador de
 * errrores.
 */
app.use(function (req, res, next) {
    next(createError(404));
});

/**
 * Representa el manejo de errores.
 */
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
