//Algorithms
const clean = require("./utility/clean.js");
const verify = require("./utility/verify.js");
const generate = require("./generate-arrays.js");
const selection = require("./algorithms/selection-sort.js");
const bubble = require("./algorithms/bubble-sort.js");
const sorts = ["selection", "bubble"];
const nArray = 8;

//Starts program
function init(){
    clean.files();
    generate.start(nArray);
    //selection.start(nArray);
    //bubble.start(nArray);
    //verify();
}

init();