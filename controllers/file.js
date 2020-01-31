var mongoose = require('mongoose');
var Filedb = mongoose.model('files');

var multer = require('multer');
var fs = require('fs');
var fileid;
var dir;
var number = 0; 

var storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, dir);
    },
    filename: function(req, file, callback){
        callback(null, number +'_'+file.originalname);
        number = number + 1;
    }
})

var fileUpload = multer({
    storage: storage,
    limits: 1024*1024*1024
}).array('game_file', 10);



/* GET 'Upload' page*/
module.exports.uploadpage = function(req, res) {
    
    fileid = req.params.pw;
    dir = 'fileStorage/'+fileid+'/';

    res.render('fileGame', {
        title: 'play game',
        pageHeader: {
            title: 'Unity'},
        pageFooter: {
            explain: 'copylight'}
    });

};

module.exports.uploadGame = function(req, res){

    number = 0;
    console.log(dir);
    fileUpload(req, res, function(err){
        console.log(req.body);
    })
    
    console.log('file upload')

    res.redirect('/')


}

