var express = require('express');

var app=express();

var path = require('path');

var base = require('./dbcon.js');

app.get('/',function(req,respuesta){
	// respuesta.send('Hola mundo');
	// respuesta.end('Att. Samuel');
	// respuesta.sendfile('index.html'); //deprecated
	 respuesta.sendFile(path.join(__dirname + '/index.html'));
	 console.log(base);
});

app.listen(8080);