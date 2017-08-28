var express = require('express');
var wordsRouter = express.Router();
var wordsController = require("../controllers/wordsController");

wordsRouter.route("/:words")
    .get(wordsController.getWords);

module.exports = wordsRouter;