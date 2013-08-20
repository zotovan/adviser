module.exports = function (app) {

    // Информация о сервисе
    app.get('/', function (req, res) {
        
        //res.send('Start server Adviser 0.1.0 on port ' + req.app.get('port'));

        res.render('index',
          { title: 'Home' }
        );

    });

    // Информация по элементу на странице
    function OnItemProc(req, res) {
        res.send('ggg');
    };
    app.get('/itemproc', OnItemProc);
    app.post('/itemproc', OnItemProc);


}

