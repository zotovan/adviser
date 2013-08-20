
  var http = require('http');
  var express = require('express');       // Использовать фремворк Express
  var stylus = require('stylus');         // Stylus - генератор CSS по файлам .styl
  var nib = require('nib');               // Nib - плагин для Stylus (обеспечивает Reset для стилей CSS)
  

  var app = express();
  app.set('port', 80);                              // Порт сервера
  app.set('views', __dirname + '/views');           // Путь к вьюшкам для шаблонизатора
  app.set('view engine', 'jade');                   // Использовать шаблонизатор Jade
  app.use(express.static(__dirname + '/public'));   // Из папки public статические файлы отдаются как из корня сайта
  app.use(stylus.middleware({                       // Stylus - подключение модуля nib
        src: __dirname + '/public', 
        compile: function compile(str, path) {
            return stylus(str)
            .set('filename', path)
            .use(nib());
        }
      }
  ));

  require('./routes/index.js')(app); // Контроллеры
  

  // Запуск сервера
  http.createServer(app).listen(process.env.PORT || app.get('port'), function(){
    console.log('Start server Adviser 0.1.0 on port ' + app.get('port'));
  });