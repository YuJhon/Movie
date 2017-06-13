var mongoose = require('mongoose'),
    DB_URL = 'mongodb://localhost:27017/movie';

/** 连接到MongoDB **/
mongoose.connect(DB_URL);

/** 连接成功 **/
mongoose.connection.on('connected', function () {    
    console.log('Mongoose connection open to ' + DB_URL);  
});    

/** 连接异常 **/
mongoose.connection.on('error',function (err) {    
    console.log('Mongoose connection error: ' + err);  
});    
 
/** 链接断开 **/
mongoose.connection.on('disconnected', function () {    
    console.log('Mongoose connection disconnected');  
});    

module.exports = mongoose;