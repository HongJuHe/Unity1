var mongoose = require('mongoose');
var Filedb = mongoose.model('files');
var fs = require('fs');
var objid;

module.exports.check = function(req,res) {
    objid = req.params.objid || req.query.objid;
    var game_name;
    console.log(objid);
    Filedb.find({"_id":objid}, function(err, results) {
        game_name=results[0]._doc.game_name;
        console.log(game_name);
        console.log("hello");
        res.render('check2', {
				    title: 'play game',
                                    result: game_name,
				    pageHeader: {
					    title: 'Unity'},
				    pageFooter: {
					    explain: 'copyright'}
			    });
   });
   
};

module.exports.delet = function(req, res) {
    objid = req.params.objid || req.query.objid;
    console.log(objid); 
    console.log("final check");
    Filedb.find({"_id":objid}, function(err, results) {
       console.log("hi");
       var passwd = results[0]._doc.password;
       console.log(passwd);
       var path = 'public/fileStorage/'+passwd;
       console.log(path);
       if (fs.existsSync(path)) {
	  console.log("find file");
          fs.readdirSync(path).forEach(function(file, index) {
              var curpath = path+"/"+file;
              if (fs.lstatSync(curpath).isDirectory()) {
                  deleteFolderRecursive(curpath);
              } else {
                  fs.unlinkSync(curpath); }
          });

          fs.rmdir(path, function(err) {
             if (err) {
                 console.log("fail to delete folder");
                 throw err;}
             else {
                 console.log("file deleted");
                 Filedb.remove({"password":passwd}, function(err) {
                      if (err) {
                           console.log('fail to delete data');
                           throw err;}
                       else {
                            console.log("success");
                            res.render('check', {
				    title: 'play game',
				    pageHeader: {
					    title: 'Unity'},
				    pageFooter: {
					    explain: 'copyright'}
			    });
                       }
                 });
             }
          });
       };
   });
};
