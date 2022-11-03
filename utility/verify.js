const fs = require('fs');
const log = require("./logging.js");

//Finds arrays
function all(){
    let algorithms = console.log(fs.readdirSync('../output'));
    let arrays = console.log(fs.readdirSync('../output'));
    //For each algorithm
    for(let i = 0; i < algorithms.length; i++){
        //For each array size
        for(let j = 0; j < arrays.length; j++){
            let array = fs.readFileSync(`../output/${algorithms[i]}/${arrays}.csv`, "utf8").split(",");
            check(array);
        }
    }
}

//Checks if array is sorted
function check(array){
    let sorted = true;
    for(let i = 0; i < array.length - 1; i++){
        if(array[i] > array[i + 1]){
            sorted = false;
        }
    }
    log.sorted(sorted);
}

module.exports = {all}