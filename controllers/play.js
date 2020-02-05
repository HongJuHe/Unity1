var mongoose = require('mongoose');
var Filedb = mongoose.model('files');
var fs = require('fs');
var num = 0;

/* GET 'Upload' page*/
module.exports.playgame = function(req, res) {
    res.render('upload', {
        title: 'play game',
        pageHeader: {
            title: 'Unity'},
        pageFooter: {
            explain: 'copylight'}
    });
};


