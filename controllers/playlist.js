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

