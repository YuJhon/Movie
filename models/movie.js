// 建立Movie模型 
var mongoose = require("../config/db");
var Schema =mongoose.Schema;

var movieSchema = new Schema({
    title: {type:String},
    releaseYear: {type:String},
    director: {type:String},
    genre: {type:String}
});

module.exports = mongoose.model('Movie',movieSchema);