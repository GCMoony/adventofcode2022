// Import the data
let file = require("../formatFile").getFileArray("./input.txt");
file = require("../formatFile").getFormatLines(file);
//console.log(file);

// How many section pairs does 1 section
    // completely overlap the other section?
function partA()
{
    let totalSum = 0;
    let pairs = file;
    pairs.forEach(pair => {
        // Get each elves' sections
        pair = pair.split(",");
        let elf1 = pair[0].split("-");
        let elf2 = pair[1].split("-");

        // Something weird happens here
            // Where even though the values are
            // split as expected, the function
            // createRangedArray sees the inputs
            // as something other than Numbers
        elf1 = createRangedArray(elf1[0], elf1[1]);
        elf2 = createRangedArray(elf2[0], elf2[1]);

        // Check to see if one encompases the other
        if(isSubArray(elf1, elf2))
        {
            totalSum += 1;
        }
        
        
    })

    console.log(totalSum);
}

partA();


// How many section pairs does 1 section
    // partially overlap the other section?
function partB()
{
    let totalSum = 0;
    let pairs = file;
    pairs.forEach(pair => {
        // Get each elves' sections
        pair = pair.split(",");
        let elf1 = pair[0].split("-");
        let elf2 = pair[1].split("-");

        // Something weird happens here
            // Where even though the values are
            // split as expected, the function
            // createRangedArray sees the inputs
            // as something other than Numbers
        elf1 = createRangedArray(elf1[0], elf1[1]);
        elf2 = createRangedArray(elf2[0], elf2[1]);

        // Check to see if one encompases the other
        if(hasAnyMatching(elf1, elf2))
        {
            totalSum += 1;
        }
        
        
    })

    console.log(totalSum);
}

partB();




// ===== Helper Methods =====

// This function will generate a range of values in an array
    // given a starting value, and an ending value (inclusive)
function createRangedArray(startVal, endVal)
{
    let rangedArray = [];
    //if(typeof(startVal) !== Number || typeof(endVal)  !== Number )
    //throw(console.error(`${startVal} is of type: ${typeof(startVal)} \n${endVal} is of type: ${typeof(endVal)}`))
    // Ensuring the inputs provided are of type Number
    for(let index = Number(startVal); index <= Number(endVal); index++)
    {
        rangedArray.push(Number(index));
    }
    return rangedArray;
}

//console.log(createRangedArray(29, 52));
//console.log(createRangedArray(44, 71));

// Given two arrays, see if each value in 1 array
    // can be found in the other array
function isSubArray(array1, array2)
{
    // Will assume one array is a subset of the other
    let isFullyContained = true;
    let smallestArr, largestArr;
    if(array1.length < array2.length)
    {
        smallestArr = array1;
        largestArr = array2;
    }
    else
    {
        largestArr = array1;
        smallestArr = array2;
    }

    // Want to test each value of the smallest array
    smallestArr.forEach(value => {
        if(!largestArr.includes(value))
        {
            //console.log(value);
            isFullyContained = false;
        }
    })

    return isFullyContained;
}

  
/*
let largest = createRangedArray(46, 67);
let smallest = createRangedArray(6, 50);
console.log(largest, smallest)
console.log(isSubArray(largest, smallest));
*/

// Given 2 arrays, determine if ANYTHING
    // in either array is found in the other
function hasAnyMatching(array1, array2)
{
    // Assume no matching items were found
    let anyMatch = false;

    // Honestly, this probably doesn't even matter
        // (At first glance)
    let smallestArr, largestArr;
    if(array1.length < array2.length)
    {
        smallestArr = array1;
        largestArr = array2;
    }
    else
    {
        largestArr = array1;
        smallestArr = array2;
    }

    smallestArr.forEach(item =>
        {
            if(largestArr.includes(item))
                anyMatch = true;
        })
    
    return anyMatch;
}