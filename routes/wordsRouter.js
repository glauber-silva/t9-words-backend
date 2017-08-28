var express = require('express');
var wordsRouter = express.Router();
var wordsController = require("../controller/wordsController");

wordsRouter.route("/:words")
    .get(wordsController.getWords);

module.exports = wordsRouter;