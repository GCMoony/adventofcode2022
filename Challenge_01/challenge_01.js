// Importing Node File reading
fs = require('fs');

// Reading the text file input
let textInput = fs.readFileSync('./input.txt', 'utf-8', (err, data) => {
    if(err)
    {
        throw err;
    }
    return data
});

// Splits the values on a new line
let formattedInputText = []
for(let aWord of textInput.split("\n"))
{
    // Removes the carriage return value from each line
    let valueString = "";
    for(let aChar of aWord)
    {
        if(aChar != "\r")
            valueString += aChar;
    }
    // Now we have a number (string) or an empty string to work with
    formattedInputText.push(valueString);
}

// formattedInputText is now an array that looks like this
    // ["1251", "4324", "", "1232", ...]

// We want a list of all elf food inventories
let listOfElfInventories = [];

// This is an inventory for a single elf
let newElfInventory = [];


for(let anItem of formattedInputText)
{
    
    if(anItem.length > 0)
    {
        // Build a new single elf inventory
        newElfInventory.push(Number(anItem));
    }
    else
    {
        // We found a "", which means
            // We add this current elf's inventory to our inventory list
            // Start building a new elf's inventory
        listOfElfInventories.push(newElfInventory);
        newElfInventory = [];
    }
}

// We add our last elf
    // Their inventory was built, but
    // There's no more "" to meet
listOfElfInventories.push(newElfInventory);

console.log(listOfElfInventories)
