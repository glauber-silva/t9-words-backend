var lineReader = require("line-reader");
var fs = require("fs");


var combination = (str) => {
    let fn = function(active, rest, a){
        if(!active && !rest)
            return;
        if(!rest){
            a.push(active)
        } else {
            fn(active + rest[0],rest.slice(1),a);
            fn(active, rest.slice(1),a);
        }
        return a;
    }
    let comb = fn("",str,[]);
    return comb
}

var getWords = (req, res) => {
    let comb = combination(req.params.words);
    var temp = [];
    var path = __dirname + '/words.txt';
    var wordlist = fs.readFileSync(path).toString().split('\n');

    for(var i = 0; i < comb.length ; i ++){
        for(var j = wordlist.length - 1; j >= 0 ; j--){
            var n = wordlist[j].startsWith(comb[i]);
            if(n){ 
                temp.push(wordlist[j]);
                wordlist.splice(j,1);
            }
        }
    }
    var words = temp.sort();
    res.status(200).json(words);
}

module.exports = {
    getWords: getWords
}