const express = require('express') //Import Express
const bodyParser = require('body-parser') //Import json magical :D
const logger = require('./utils/logs/log') //Import logger with winston
const db = require('./utils/db/db') //Import DB using Mongo
const userRoute = require('./routes/user/user')

const app = express()
const port =  process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', userRoute);

app.get('/', (req, res) => {
    res.send('Coffee Station home page');
})

app.listen(port , () =>{
    logger.info('Run at port: '+  port);
});