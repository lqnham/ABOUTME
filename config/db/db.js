const mongoose = require('mongoose');

require('dotenv').config({path: './config/.env'});

const mlabURI = process.env.DB_URL;

const conn = mongoose.connect(
	mlabURI, 
	{ useNewUrlParser: true , useUnifiedTopology: true },
	(error) => {
		if(error){
			console.log('Run at port: '+ mlabURI);
			console.log("Error " + error);
		}else{
			console.log("Connected successfully to server")
		}
});

module.exports = conn;