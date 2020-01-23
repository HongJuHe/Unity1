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

