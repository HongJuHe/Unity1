var mongoose = require('mongoose');
var Filedb = mongoose.model('files');

/* GET 'delete' page */
module.exports.dele = function(req, res) {
    res.render('ddele', {
        title: 'play game',
        pageHeader: {
            title: 'delete'},
        pageFooter: {
            explain: 'copylight'}
    });
};

module.exports.delfile = function(req, res) {
    var passwd = req.body.password;
    console.log(passwd);
    Filedb.find({"password":passwd}, function (err, results) {
      if(err) {
        console.log(err);
      }
      else{
        if(results.length >0) {
          console.log("success to find");
          var objid = results[0]._id;
          res.redirect('/check/'+objid);
        } 
        else {
         console.log("fail to find");
        }
      }
   });
}

