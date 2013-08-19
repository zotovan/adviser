
  var http = require('http');
  var express = require('express'); 
  var index = require('./controllers/index.js');
  

  var app = express();
  app.set('port', 80);
 
  // Информация о сервисе
  app.get('/', index.index);
  // Получить информацию по элементу на странице
  app.get('/itemproc', index.itemproc);
  app.post('/itemproc', index.itemproc);


  // Запуск сервера
  http.createServer(app).listen(process.env.PORT || app.get('port'), function(){
    console.log('Start server Adviser 0.1.0 on port ' + app.get('port'));
  });