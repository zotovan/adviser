//var http = require('http');

//http.createServer(function (req, res) {
//    
//    res.writeHead(200, { 'Content-Type': 'text/html' });
//    res.end('Hello, world!');
//    
//}).listen(process.env.PORT || 8080);

  var express = require('express');
  var http = require('http');
  var index = require('./controllers/index.js');

  var app = express();
          
   
  app.get('/', index.index);

  http.createServer(app).listen(process.env.PORT || 80, function(){
    console.log('Express server listening on port ' + app.get('port'));
  });