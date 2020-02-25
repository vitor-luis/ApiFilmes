const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const database = require('./src/config/database');

const port = process.env.PORT || 3000

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/json'}));


app.listen(port, function(){
    console.log(`API listen on port ${port}`);
})

module.exports = app;