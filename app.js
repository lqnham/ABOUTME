const express = require('express') //Import Express
const bodyParser = require('body-parser') //Import json magical :D
const logger = require('./server/config/log/log') //Import logger with winston
const db = require('./server/config/db/db') //Import DB using Mongo
const userRoute = require('./server/routes/user') //Import routers user
const contactRoute = require('./server/routes/contact') //Import routers contact
const totpToken = require('./server/routes/totpToken') //Import routers contact
require('dotenv').config({path: './server/config/dev.env'}); 

const app = express()
const PORT = process.env.PORT

//Process bodyparser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

//Declare routes
app.use('/users', userRoute);
app.use('/contact', contactRoute);
app.use('/totp', totpToken);
//default home page
app.get('/', (req, res) => {
    logger.info('Go to default homepage ');
    res.send('Coffee Station home page');
})


//port listening
app.listen(PORT , () =>{
    logger.info(`Run server at URL: ${PORT}`);
});