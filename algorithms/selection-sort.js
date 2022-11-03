const fs = require('fs');
const log = require("../utility/logging.js");
const time = require("../utility/time.js");
const sortName = "selection-sort";
const sortNameLog = "Selection sort";

function start(nFiles){
    let tStart = performance.now();
    const arrays = JSON.parse(fs.readFileSync("./input/arrays.json"));
    log.createDirectiory("output/selection-sort");
    log.csv(null, `${sortNameLog}`);
    log.startSort(`${sortNameLog}`);

    //For each array
    for(let i = 0; i < nFiles; i++){
        let start = performance.now();
        let array = fs.readFileSync(`./input/${arrays[i]}`, {encoding:'utf8', flag:'r'}).split(",").map(function(x) {return parseInt(x, 10)});

        //For each index in array
        log.createFile("out", `${sortName}`, `${array.length}`);
        for(let j = 0; j < array.length - 1; j++){
            let index = j;

            //Look for smallest number
            for(let k = j + 1; k < array.length; k++){
                if(array[k] < array[index]){
                    index = k;
                }
            }

            //Swaps numbers
            let temp = array[j];
            array[j] = array[index];
            array[index] = temp;
        }

        //Logs data
        let end = performance.now();
        let runtime = time.calculate(start, end);
        log.midSort(i, nFiles, runtime, false);
        log.appendFile("out", `${sortName}`, `${array.length}`, array.toString());
        log.csv(runtime);
    }

    let tEnd = performance.now();
    let runtime = time.calculate(tStart, tEnd);
    log.endSort(runtime, false);
    log.csv(`${runtime}\n`);
}

module.exports = {start}