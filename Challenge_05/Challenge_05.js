// Import the data
let file = require("../formatFile").getFileArray("./input.txt");
file = require("../formatFile").getFormatLines(file);
//console.log(file);

// After moving crates around, find the 
    // crates that have been moved
    // to the top of each stack
    // From column 1 - 9


// Want to get current crate layout
function getCrateLayout(inputFile)
{
    let layout = [];
    let rowIndex = 0;
    let rowString;
    while(rowString !== "")
    {
        rowString = inputFile[rowIndex];
        layout.push(rowString);
        rowIndex++;
    }
    layout.pop();
    console.log(layout);
}

getCrateLayout(file);