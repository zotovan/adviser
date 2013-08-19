
  var http = require('http');
  var express = require('express'); 
  
  // Создание сервера
  var app = express();
  app.set('port', 80);
 
  require('./controllers/index.js')(app); // Обработчики навешиваются внутри
  




  // Запуск сервера
  http.createServer(app).listen(process.env.PORT || app.get('port'), function(){
    console.log('Start server Adviser 0.1.0 on port ' + app.get('port'));
  });