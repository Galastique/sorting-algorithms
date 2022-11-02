const fs = require('fs');

//Deletes directories
function files(){
    cleanArrays();
    cleanSorted();
}

function cleanArrays(){
    if(fs.existsSync("./arrays/")){
        fs.rmSync("./arrays/", { recursive: true, force: true });
    }
}

function cleanSorted(){
    if(fs.existsSync("./output/")){
        fs.rmSync("./output/", { recursive: true, force: true });
    }
}

module.exports = {files}