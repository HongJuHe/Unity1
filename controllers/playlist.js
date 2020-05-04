var mongoose = require('mongoose');
var Filedb = mongoose.model('files');
var fs = require('fs');

/* GET 'PlayList' page*/
module.exports.playlist = function(req, res){
   Filedb.findAll(function(err, results){
   if (err) {
      console.err('error :' + err.stack);
      res.writeHead('200', {'Content-Type' : 'text/html;charset=utf8'});
      res.write('<h2>error error</h2>');
      res.write('<p>' + err.stack + '</p>');
      res.end();
      return;
      }
         
   if(results) {
        //console.dir(results);
		var output = [];
		async function a(){
		for(var i = 0 ; i < results.length ; i++){

		var game_name = results[i]._doc.game_name;
		var password = results[i]._doc.password;
		var objectid = results[i]._id;
		console.log(objectid);
		var dir = 'public/fileStorage/' + password;
		var files = fs.readdirSync(dir);
		var thumbnail = '';
		
		for(var j = 0; j < files.length ; j++){
			var file = files[j];

			var suffix = file.substr(file.length - 4, file.length);

			if(suffix === '.jpg' || suffix === '.png' || suffix === '.JPG' || suffix === '.PNG'){
				thumbnail = file;		
			}
	}
		output.push({password : password, game_name : game_name, thumbnail : thumbnail, objectid : objectid});
		}
	}
	a();
	console.log(output);
        res.render('playlist', {
        title: 'play game',
	result: output,
        pageHeader: {
            title: 'playlist'},
        pageFooter: {
            explain: 'copyright'}
    });
	//res.end();
      } else {
         res.write('list failed');
         res.end();
}
         });

};


