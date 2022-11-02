const fs = require('fs');

function start(nFiles){
    let tStart = performance.now();
    let arrays = JSON.parse(fs.readFileSync("./arrays/arrays.json"));

    console.log("\n\x1b[34mSORT TYPE: \x1b[0m");
    fs.appendFileSync(`./stats.csv`, "SORT TYPE,");

    //For each array
    for(let i = 0; i < nFiles; i++){
        let start = performance.now();
        let array = fs.readFileSync(`./arrays/${arrays[i]}`, {encoding:'utf8', flag:'r'}).split(",").map(function(x) {return parseInt(x, 10)});

        //For each index
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
        
        if(!check(array)){
            console.log(`\x1b[31mError sorting array\x1b[0m`);
        }

        console.log(`Array ${i + 1} of ${nFiles} sorted - ${Math.round((end - start) / 1000)}s`);
        fs.appendFileSync(`./stats.csv`, `${Math.round((end - start) / 1000)},`);
    }

    let tEnd = performance.now();

    console.log(`\x1b[32mSuccessfully sorted arrays (${Math.round((tEnd - tStart) / 1000)}s)\x1b[0m`);
    fs.appendFileSync(`./stats.csv`, `${Math.round((tEnd - tStart) / 1000)},\n`);
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

module.exports = {start}