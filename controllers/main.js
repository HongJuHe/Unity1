/* GET 'Main' page */
module.exports.show = function(req, res) {
    res.render('layout', {
        title: 'play game',
        pageHeader: {
            title: 'Unity'},
        pageFooter: {
            explain: 'copylight'}
    });
};

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

/* GET 'PlayList' page*/
module.exports.playlist = function(req, res) {
    res.render('playlist', {
        title: 'play game',
        pageHeader: {
            title: 'Unity'},
        pageFooter: {
            explain: 'copylight'}
    });
};

