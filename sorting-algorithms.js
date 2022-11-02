//Algorithms
const generate = require("./generate-arrays.js");
const selection = require("./algorithms/selection-sort.js");
const bubble = require("./algorithms/bubble-sort.js");
const sorts = ["selection", "bubble"];
const nArray = 8;

//Starts program
function init(){
    generate.start(nArray);
    //selection.start(nArray);
    //bubble.start(nArray);
    //verify();
}


//Makes sure that every array is sorted correctly
function verify(){
    console.log("\n\x1b[34mVerifying arrays...\x1b[0m");

    //For every sort type
    for(let i = 0; i < sorts; i++){
        //For every array
        for(let j = 0; j < nArray.length; j++){
            //MAKE ALGORITHMS CREATE TEMP DIRECTORY ./TEMP/ALGORITHM-NAME/ARRAY-NUMBER
            if(!check(fs.readFileSync(`./arrays/${arrays[i]}`, {encoding:'utf8', flag:'r'}).split(",").map(function(x) {return parseInt(x, 10)}))){
                console.log(`\x1b[31mError sorting array X of Y algorithm\x1b[0m`);
            }
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
    return sorted;
}

init();