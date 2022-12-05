let file = require("../formatFile").getFileArray("./input.txt");
file = require("../formatFile").getFormatLines(file);

// let counter = 1;

let rucksacksBase = file;
function partA()
{
    let totalSum = 0;
    let rucksacks = rucksacksBase;
    for(let rucksack of rucksacks)
    {
        // Splits the rucksack's contents into two pouches
        rucksack = splitStringInHalf(rucksack);

        // Finds the similar item in both pouches
        rucksack = findSimilarItems(rucksack[0], rucksack[1]);

        // Finds the priority value of that item
        rucksack = getLetterValue(rucksack[0]);
        totalSum += rucksack;
        //console.log(`Line ${counter}`, line);
        //counter++;
        //rucksacks.push(splitStringInHalf(line));
    }
    console.log(`Total sum of priority items in all rucksacks: ${totalSum}`);
}
partA();

function partB()
{
    let totalSum = 0;
    
    // Create groups of 3 for all rucks
    let groupedRucks = getGroupedRucks();

    // Find a common item in the grouped 3 rucks
    for(let group of groupedRucks)
    {
        group = findSimilarItemsMore(group);
        totalSum += getLetterValue(group[0]);
    }

    console.log(`Total sum of priority items in all grouped rucksacks: ${totalSum}`);
}

partB();


// === Helper Methods ===


// This takes an array of rucksacks
    // and puts them all into groups of 3
    // And returns an array with arrays of groups of 3
function getGroupedRucks()
{
    let rucksacks = rucksacksBase;
    let groupedRucks = [];
    let group3Rucks = [];
    for(let rucksackIndex = 0; rucksackIndex < rucksacks.length+1; rucksackIndex++)
    {
        if(group3Rucks.length == 3)
        {
            groupedRucks.push(group3Rucks);
            group3Rucks = [];
        }
        group3Rucks.push(rucksacks[rucksackIndex]);
    }
    return groupedRucks;
}


// This takes an alphabet character and provides
    // a priority value based on the rule:
    // a-z: 1 - 26
    // A-Z: 27 - 52
function getLetterValue(aLetter)
{
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet.indexOf(aLetter) + 1; // Add 1 to value because index starts at 0
}


// This function splits an object in half
    // and provides an array of each half
function splitStringInHalf(aString)
{
    let first = aString.slice(0, aString.length / 2);
    let second = aString.slice(aString.length / 2, aString.length);
    return [first, second];
}


// This function finds similar items in two arrays
    // and provides an array of found similar items
function findSimilarItems(array1, array2)
{
    let similarItems = [];
    for(let itemA of array1)
    {
        for(let itemB of array2)
        {
            if(itemA == itemB && !similarItems.includes(itemA))
                similarItems.push(itemA);
        }
    }
    return similarItems;
}


// Function finds similar items in 3 arrays
    // (Listen, I'm still new to JS spread features)
    // I'm not sure how I could recursively call this
    // function given n number of arrays
function findSimilarItemsMore(arrays)
{
    // Ditto with initialization
    let similarItems = [];
    for(let itemA of arrays[0])
    {
        for(let itemB of arrays[1])
        {
            for(let itemC of arrays[2])
            {
                if(itemA == itemB && itemB == itemC && !similarItems.includes(itemA)) 
                    similarItems.push(itemA);
            }
                
        }
    }
    return similarItems;
}