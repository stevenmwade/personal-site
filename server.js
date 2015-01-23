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
app.get('/about', indexController.about);
app.get('/work/web', indexController.web);
app.get('/work/photo', indexController.photo);
app.get('/contact', indexController.contact);

var server = app.listen(2975, function() {
	console.log('Express server listening on port ' + server.address().port);
});
