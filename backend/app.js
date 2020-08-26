import express from express;
var path = require('path');
var cookieParser = require('cookie-parser');

var users = require('./routes/users');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/v1/users', users);

module.exports = app;
