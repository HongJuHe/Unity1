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

