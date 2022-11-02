const log = require("./logging.js");

//Finds arrays
function all(){

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