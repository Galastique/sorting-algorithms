const fs = require('fs');

//Logs data & execution time to console
function startSort(text){
    console.log(`\n\x1b[34m${text}: \x1b[0m`);
}

function midSort(i, end, runtime, generate){
    text = "sorted";
    if(generate){
        text = "generated";
    }
    console.log(`Array ${i + 1} of ${end} ${text} - ${runtime}s`);
}

function endSort(runtime, generate){
    let text;
    if(generate){
        text = "Successfully generated arrays";
    }else{
        text = "";
    }

    console.log(`\x1b[32m${text} (${runtime}s)\x1b[0m`);
}


//Writes data to files
function csv(value, type){  
    //Creates directory  
    if(!fs.existsSync("./output/")){
        fs.mkdirSync("./output/", {recursive: true});
    }

    //Appends data to file
    if(type == "Array generation"){
        fs.writeFileSync("./output/stats.csv", `${type}`);
    }else if(type != null){
        fs.appendFileSync("./output/stats.csv", `\n${type}`);
    }else{
        fs.appendFileSync("./output/stats.csv", `,${value}`);
    }
}

function arrays(arrays){
    fs.writeFileSync("./input/arrays.json", arrays);
}


//Writes array outputs
function createFile(inOut, size, data){
    fs.writeFileSync(`./${inOut}put/${size}_numbers.csv`, data);
}

function appendFile(inOut, size, data){
    fs.appendFileSync(`./${inOut}put/${size}_numbers.csv`, data);
}


//Array sorted?
function sorted(sorted){
    if(sorted){
        console.log(`\x1b[33mSorting successful! \x1b[0m`);
    }else{
        console.log(`\x1b[31m!!Sorting NOT successful!! \x1b[0m`);
    }
}


module.exports = {
    startSort,
    midSort,
    endSort,
    csv,
    createFile,
    appendFile,
    arrays
}