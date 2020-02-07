var mongoose = require('mongoose');
var Filedb = mongoose.model('files');
var fs = require('fs');


/* GET 'Upload' page*/
module.exports.upload = function(req, res) {
    res.render('upload', {
        title: 'play game',
        pageHeader: {
            title: 'Unity'},
        pageFooter: {
            explain: 'copyright'}
    });
};

module.exports.addFile = function(req, res){

    console.log(req.body.name);
    var names = req.body.name;
    var ids = req.body.id;

    var namesFile = [];
    var idsFile = [];

    for(var i = 0; i < 3; i++){
        if(names[i] != ''){
            namesFile.push(names[i]);
        }
        if(ids[i] != ''){
            idsFile.push(ids[i]);
        }

    }

    console.log(namesFile);

    Filedb.create({
        name : namesFile,
        id : idsFile,
        game_name : req.body.game_name,
        password : req.body.passwd,
        content : req.body.content

    }, function(err, file){
        if(err){
            console.log(err);
            res.writeHead('200', {'Content-Type':'text/html;charset=utf-8'});
            res.write('<h2>file failed!</h2>');
            res.end();
            return;
                    
        }else{
            var dirUrl = 'public/fileStorage';
            var fileContent = req.body.passwd;

            dirUrl = dirUrl + '/' + fileContent;

            fs.mkdir(dirUrl, function(err){
                if(err){
                    console.error(err);
                }
            });

            res.redirect('/file/'+fileContent);
        }
    });
    
}
