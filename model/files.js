var mongoose = require('mongoose');

var FileSchema = new mongoose.Schema({
    name : {type : String, required : true},
    id : {type : String, required : true},
    game_name : {type : String, required : true},
    password : {type : String, required : true},
    content : {type : String},
    uploadAt : {type : Date, default : Date.now}
});

FileSchema.static('findAll', function(callback){
    return this.find({ }, callback);
});

mongoose.model('files', FileSchema);
