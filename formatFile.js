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

// To export for Node
exports.getFileArray = getFileArray

//let text = getFileArray("./Challenge_02/input.txt");
//console.log(text.split("\n"));