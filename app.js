var express = require('express');
var bodyParser = require('body-parser');
var wordsRouter = require('./routes/wordsRouter');

var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.listen(8080, () => {
    console.log("Server running on port 8080")
});

app.use("/words", wordsRouter);

module.exports = app;