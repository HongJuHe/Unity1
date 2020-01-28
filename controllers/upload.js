var mongoose = require('mongoose');
var Filedb = mongoose.model('files');


/* GET 'Upload' page*/
module.exports.upload = function(req, res) {
    res.render('upload', {
        title: 'play game',
        pageHeader: {
            title: 'Unity'},
        pageFooter: {
            explain: 'copylight'}
    });
};

module.exports.addFile = function(req, res){
<<<<<<< HEAD

    console.log(req.body.name);

=======
>>>>>>> 15ff6c3fdced1f9a6e51f85996729c531fc3d73c
    Filedb.create({
        name : req.body.name,
        id : req.body.id,
        game_name : req.body.game_name,
        password : req.body.passwd,
        content : req.body.content

    }, function(err, file){
        if(err){
            console.log(err);
            res.writeHead('200', {'Content-Type':'text/html;charset=utf-8'});
            res.write('<h2>file failed!</h2>');
            res.end();
        }else{
<<<<<<< HEAD
            res.redirect('/file')
            
=======
            console.log(file);
            res.writeHead('200', {'Content-Type':'text/html;charset=utf-8'});
            res.write('<h2>file 추가</h2>');
            res.end();
>>>>>>> 15ff6c3fdced1f9a6e51f85996729c531fc3d73c
        }
    });


}

