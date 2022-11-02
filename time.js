//Calculates execution time
function calculate(start, end){
    return Math.round((end - start) / 100) / 10;
}

module.exports = {calculate}