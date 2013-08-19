exports.index = function (req, res) {
    //res.render('index', {});
    res.send('Start server Adviser 0.1.0 on port ' + req.app.get('port'));
}; 

exports.itemproc = function (req, res) {
    //res.render('index', {});
    res.send('hhh');
};