const express = require('express') //Import Express
const logger = require('./utils/logs/log') //Import logger with winston
const db = require('./utils/db/db') //Import DB using Mongo
const bodyParser = require('body-parser') //Import json magical :D
const app = express()
const port =  process.env.PORT || 3000;

app.use(bodyParser.json())

app.get('/', (req, res) => {
    logger.warn('Run');
    res.send('Ty  Chuot');
})

app.listen(3000 , () =>{
    logger.info('Run at port: '+  port);
});