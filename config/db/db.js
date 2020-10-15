const logger = require('../logs/log.js') //Import logger with winston
const mongoose = require('mongoose');

require('dotenv').config({path: './config/.env'});

const mlabURI = process.env.DB_URL;

const conn = mongoose.connect(
	mlabURI, 
	{ useNewUrlParser: true , useUnifiedTopology: true },
	(error) => {
		if(error){
			logger.error('Run fail at URL: '+ mlabURI);
			logger.error("Error " + error);
		}else{
			logger.info("Connected successfully to server")
		}
});

module.exports = conn;