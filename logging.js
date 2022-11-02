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
    if(type == "Array generation"){
        fs.writeFileSync("./stats.csv", `${type}`);
    }else if(type != null){
        fs.appendFileSync("./stats.csv", `\n${type}`);
    }else{
        fs.appendFileSync("./stats.csv", `,${value}`);
    }
}

function arrays(arrays){
    fs.writeFile("./arrays/arrays.json", arrays, 'utf8', function (err){
        if(err){
            return console.log(err);
        }
    });
}


module.exports = {
    startSort,
    midSort,
    endSort,
    csv,
    arrays
}