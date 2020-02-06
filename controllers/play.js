var mongoose = require('mongoose');
var Filedb = mongoose.model('files');
var fs = require('fs');
var objectid =0;

/* GET 'Upload' page*/
module.exports.play = function(req, res) {
    res.render('play', {
        title: 'play game',
        pageHeader: {
            title: 'Unity'},
        pageFooter: {
            explain: 'copylight'}
    });
};

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
      		//console.err('error :' + err.stack);
     	 	console.error(err);
      		res.writeHead('200', {'Content-Type' : 'text/html;charset=utf8'});
     	 	res.write('<h2>error error</h2>');
      		res.write('<p>' + err.stack + '</p>');
     	 	res.end();
     	 	return;
     	 	}
         
  	 	if(results) {
		var game_name = results[0]._doc.game_name;
		var name = 0;
		var id = 0;
		var uploadAt = results[0]._doc.uploadAt;
		var content = results[0]._doc.content;
		var password = results[0]._doc.password;

		console.dir(results);
      		res.writeHead('400', {'Content-Type' : 'text/html;charset=utf8'});
		//change test 
      		res.write('<h2>Play Game</h2>');

     	 for (var i = 0 ; i < results.length; i++)
		{
        	 //game_name
		if(i==0)
            	res.write('<p>game_name : ' +game_name +'</p>');
         	
        	 //name(id)
           	 name = results[i]._doc.name;
           	 id = results[i]._doc.id;
            	if(i == 0)
            		res.write('<p>name: ');  
            	res.write(name +'(' +id +') ');  
     		 } 
		res.write('</p>'); 

      for (var i = 0 ; i < results.length; i++)
	{
	if(i==0){
         //uploadAt, content
           res.write('<p>uploadAt : ' +uploadAt +'</p>');
           res.write('<p>content : ' +content +'</p>');
		}
    	 } 

      var dir = "public/fileStorage/" +password;
      var htmldir = " ";

      var files = fs.readdirSync(dir);
	console.log(files);

      for (var i = 0; i < files.length ; i++){
	var file = files[i];
	var suffix = file.substr(file.length -5, file.length);
	console.log(suffix);

	if (suffix == '.html') {
		htmldir = file; 		
	}
}
	
	htmldir = '/fileStorage/' +password +'/' +htmldir;
	//res.write(htmldir);
	res.write("<iframe src = " +htmldir +" style='width:80%; height:70%'></iframe>");
	
      res.end();
        }
        });
         }
});
}

