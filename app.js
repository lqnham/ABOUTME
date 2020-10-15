const express = require('express') //Import Express
const logger = require('./utils/log') //Import logger with winston
const db = require('./utils/db') //Import DB using Mongo

const app = express()
const port = 3000 //defind port listen

app.get('/', (req, res) => {
    logger.warn('Run');
    res.send('Ty  Chuot');
})

app.listen(3000 , () =>{
    logger.info('Run at port: '+  port);
});