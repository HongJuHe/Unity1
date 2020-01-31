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
            explain: 'copylight'}
    });
};

module.exports.addFile = function(req, res){

    console.log(req.body.name);

    var names = req.body.name;
    var ids = req.body.id;

    for(var i = 0; i < names.length; i++){
        if(names[i] != ''){
            Filedb.create({
                name : names[i],
                id : ids[i],
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
                    /*
                    console.dir(file);
                    */
                }
            });
        }
    }
    var date = Filedb.find({"password":req.body.passwd});

    var dirUrl = './fileStorage';
    var fileContent = Date.now() +'_'+ req.body.passwd;

    dirUrl = dirUrl + '/' + fileContent;

    fs.mkdir(dirUrl, function(err){
        if(err){
            console.error(err);
        }
    });

    res.redirect('/file/'+fileContent);
}

