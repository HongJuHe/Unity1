var mongoose = require('mongoose');

var FileSchema = new mongoose.Schema({
    name : {type : String, required : true},
    id : {type : String, required : true},
    game_name : {type : String, required : true},
    password : {type : String, required : true},
    content : {type : String},
    fileLocation : {type : String},
    uploadAt : {type : Date, default : Date.now}
});

mongoose.model('files', FileSchema);