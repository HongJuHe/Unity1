var mongoose = require('mongoose');
var Filedb = mongoose.model('files');
var fs = require('fs');
var objectid =0;

/* GET 'Upload' page*/
module.exports.playgame = function(req, res){
   //var objectid = req.params.objectid;
   objectid = req.query.objectid || req.params.objectid;
   objectid = objectid.substring(1);

   console.log(objectid);
   Filedb.find({"_id":{$eq:objectid}}, function(err, results) {
   if (err) 
	{
      //console.err('error :' + err.stack);
      console.error(err);
      res.writeHead('200', {'Content-Type' : 'text/html;charset=utf8'});
      res.write('<h2>error error</h2>');
      res.write('<p>' + err.stack + '</p>');
      res.end();
      return;
      }
         
   if(results) 
	{

		var password = results[0]._doc.password;
		Filedb.find({"password":{$eq:password}}, function(err, results) 
		{
   		if (err) {
     	 	console.error(err);
      		res.writeHead('200', {'Content-Type' : 'text/html;charset=utf8'});
     	 	res.write('<h2>error error</h2>');
      		res.write('<p>' + err.stack + '</p>');
     	 	res.end();
     	 	return;
     	 	}
         
  	 	if(results) {

		var output = [];
		var game_name = results[0]._doc.game_name;
		var uploadAt = results[0]._doc.uploadAt;
		var content = results[0]._doc.content;
		var password = results[0]._doc.password;
		var name = results[0]._doc.name;
		var id = results[0]._doc.id;

		var dir = "public/fileStorage/" +password;
		var htmldir = " ";
		var files = fs.readdirSync(dir);
	
      		for (var i = 0; i < files.length ; i++)
		{
			var file = files[i];
			var suffix = file.substr(file.length -5, file.length);
			console.log(suffix);

			if (suffix == '.html') 
			{
				htmldir = file; 		
			}
		}
		htmldir = '/fileStorage/' +password +'/' +htmldir;
		
		console.log(name.length)
		for (var i = 0 ; i < name.length; i++) 
		{

			name = results[0]._doc.name[i];
			id = results[0]._doc.id[i];

			output.push({game_name : game_name, uploadAt : uploadAt, content : content, password : password, htmldir : htmldir, name : name, id : id});
		}
		
		console.log(output);
		//res.write(htmldir);
		res.render('play', {
		title: 'play game',
		result : output,
		pageHeader: {
		title: 'Unity'},
		pageFooter: {
		explain: 'copylight'}
    });		
}   
        });
	} //2ndresult
       
       
//res.end();
	else 
    {
		res.write('game loading failed');
		res.end();
	}
       
   });
   };


