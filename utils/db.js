var mongoose = require('mongoose');

const mlabURI = 'mongodb://huynhduckhoan:huynhduckhoan@ds129560.mlab.com:29560/user-api'
const dbName = 'user-api';

const conn = mongoose.connect(
	mlabURI, 
	{ useNewUrlParser: true , useUnifiedTopology: true },
	(error) => {
		if(error){
			console.log("Error " + error);
		}else{
			console.log("Connected successfully to server")
		}
});

module.exports = conn;