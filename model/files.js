var mongoose = require('mongoose');

mongoose.set('useCreateIndex', true)

var FileSchema = new mongoose.Schema({
    name : {type : String, required : true},
    id : {type : String, required : true},
    game_name : {type : String, required : true},
    password : {type : String, unique : true, required : true},
    content : {type : String},
    uploadAt : {type : Date, default : Date.now}
});

FileSchema.static('findAll', function(callback){
    return this.find({ }, callback);
});

mongoose.model('files', FileSchema);
