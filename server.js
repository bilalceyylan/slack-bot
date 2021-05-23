const env = require('dotenv').config();
const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const SlackBotRoute = require('./routes/SlackBotRoute');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
); 

app.use('/api', SlackBotRoute);

app.use((err, req, res, next) => {
    
    const statusCode = err.statusCode || 500;

    console.error(err.message, err.stack);

    res.status(statusCode).json({'message': err.message});

    return;
});

app.listen(process.env.PORT).on('error', (error) => {
    console.log("error")
});  