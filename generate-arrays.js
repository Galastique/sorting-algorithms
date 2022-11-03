const fs = require('fs');
const log = require("./utility/logging.js");
const time = require("./utility/time.js");

//Generates array to sort
function start(nFiles){
    let tStart = performance.now();
    let listOfArrays = [];
    log.createDirectiory("input");
    log.csv(null, "Array generation");
    log.startSort("Generating arrays");

    //For every n file
    for(let i = 0; i < nFiles; i++){
        let start = performance.now();
        let size = 10 ** i;
        let numbers = [];

        //Makes array an odd number
        if(size.toString().length % 2 == 1 && size != 1){
            size++;
        }
        listOfArrays.push(`${size}_numbers.csv`);

        //Randomly generates numbers
        log.createFile("in", null, `${size}_numbers`);
        log.appendFile("in", null, `${size}_numbers`, randomNumber());
        for(let j = 0; j < size - 1; j++){
            numbers.push(randomNumber());
        
            //Writes numbers to file
            if(numbers.length == 10000 || j == size - 2){
                log.appendFile("in", null, `${size}_numbers`, `,${numbers.join(",")}`);
                numbers = [];
            }
        }

        //Logs data
        let end = performance.now();
        let runtime = time.calculate(start, end);
        log.midSort(i, nFiles, runtime, true);
        log.csv(runtime);
    }

    //Logs data
    let tEnd = performance.now();
    let runtime = time.calculate(tStart, tEnd);
    log.endSort(runtime, true);
    log.arrays(JSON.stringify(listOfArrays));
    log.csv(`${runtime}\n`);
}

//Generates random number
function randomNumber(){
    const min = 0;      //included
    const max = 1000;   //excluded
    return Math.floor(Math.random() * (max - min) + min).toString();
}

module.exports = {start}