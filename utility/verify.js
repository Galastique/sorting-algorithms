const fs = require('fs');
const log = require("./logging.js");

//Finds arrays
function all(){
    let algorithms = [];
    let arrays = JSON.parse(fs.readFileSync("./arrays/arrays.json"));
    //search directory `./sorted/${alrorithm[i]}/${arrays}`

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