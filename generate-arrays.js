const fs = require('fs');
const log = require("./logging.js");
const time = require("./time.js");

//Generates array to sort
function start(nFiles){
    createDirectiory();
    let tStart = performance.now();
    let arrays = [];
    log.startSort("Generating arrays");
    log.csv(null, "Array generation");

    //For every n file
    for(let i = 0; i < nFiles; i++){
        let start = performance.now();
        let size = 10 ** i;
        let numbers = [];

        //Makes array an odd number
        if(size.toString().length % 2 == 1 && size != 1){
            size++;
        }
        arrays.push(`${size}_numbers.csv`);

        //Randomly generates numbers
        fs.writeFileSync(`./arrays/${size}_numbers.csv`, randomNumber());
        for(let j = 0; j < size - 1; j++){
            numbers.push(randomNumber());
        
            //Writes numbers to file
            if(numbers.length == 10000 || j == size - 2){
                fs.appendFileSync(`./arrays/${size}_numbers.csv`, `,${numbers.join(",")}`);
                numbers = [];
            }
        }

        //Logs data
        let end = performance.now();
        let runtime = time.calculate(start, end);
        log.midSort(i, nFiles, runtime, true);
        log.csv(`${runtime}`);
    }

    //Logs data
    let tEnd = performance.now();
    let runtime = time.calculate(tStart, tEnd);
    log.endSort(runtime, true);
    log.arrays(JSON.stringify(arrays));
    log.csv(`${runtime}\n`);
}

//Creates directory to store arrays
function createDirectiory(){
    if(!fs.existsSync("./arrays/")){
        fs.mkdirSync("./arrays/", {recursive: true});
    }
}

//Generates random number
function randomNumber(){
    const min = 5;      //included
    const max = 1000;   //excluded
    return Math.floor(Math.random() * (max - min) + min).toString();
}

module.exports = {start}