var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var stylus = require('stylus');

var app = express();

function compile(str, path){
	return stylus(str).set('filename', path);
}

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(stylus.middleware(
	{
		src: '../public',
		compile: compile
	}
));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

var server = app.listen(2975, function() {
	console.log('Express server listening on port ' + server.address().port);
});
