var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(function (req, res, next) {
  console.log('CurrentTime:', Date.now());
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').__express);
app.set('view engine', 'html');

// rewrite to load static resources
app.use(express.static(path.join(__dirname, 'public')));

var movies = require("./routes/movies");
app.use('/api/movie',movies);

// static views
app.all('/*', function (req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, 'public')});
});

module.exports = app;