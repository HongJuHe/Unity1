var mongoose = require('mongoose');
var Filedb = mongoose.model('files');

var multer = require('multer');
var fs = require('fs');


var storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, 'fileStorage')
    },
    filename: function(req, file, callback){
        callback(null, file.originalname)
    }
})

var fileUpload = multer({
    storage: storage,
    limits: 1024*1024*1024
}).array('game_file', 10);



/* GET 'Upload' page*/
module.exports.uploadpage = function(req, res) {
    res.render('fileGame', {
        title: 'play game',
        pageHeader: {
            title: 'Unity'},
        pageFooter: {
            explain: 'copylight'}
    });
};

module.exports.uploadGame = function(req, res){

    console.log(req.body.name);

    fileUpload(req, res, function(err){
        console.log(req.body);
    })
    
    console.log('file upload')

    res.redirect('/main')


}

