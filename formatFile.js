// Importing Node File reading
fs = require('fs');

// Reading the text file input
function getFileArray(fileName){
    return fs.readFileSync(fileName, 'utf-8', (err, data) => {
        if(err)
        {
            throw err;
        }
        return data
    }).split("\n");
}

// Formatting inputs if they have carriage return
function getFormatLines(anImportedArray)
{
    let formattedArray = [];
    for(line of anImportedArray)
    {
        formattedArray.push(line.replace("\r", ""));
    }
    return formattedArray;
}

// To export for Node
exports.getFileArray = getFileArray;
exports.getFormatLines = getFormatLines;

//let text = getFileArray("./Challenge_02/input.txt");
//console.log(text.split("\n"));