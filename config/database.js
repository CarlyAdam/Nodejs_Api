const mongoose = require('mongoose');
//conect to Mongoose

var databaseConnection =function(){
     mongoose.connect('mongodb://localhost/bookstore',{ useNewUrlParser: true });
     var db = mongoose.connection;
 }

 module.exports = {
	databaseConnection: databaseConnection
};
