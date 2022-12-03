// Importing the data with my file format tool
let file = require("../formatFile").getFileArray("./input.txt");

// Store each line as a round (array of 2 objects)
    // For each array:
        // round[0] = opponent's move
        // round[1] = your move
    // All rounds stored in roundResults
let roundResults = [];
for(round of file)
{
    let currentRound = round.split(" ");
    roundResults.push(currentRound);
}

//console.log(roundResults)

// A helper function to determine the winner
    // (Or show a tie) of a round
    function evaluateShapes(opponentHand, yourHand)
    {
        let winPoints = 6;
        let tiePoints = 3;
        let losePoints = 0;
        if(opponentHand == "A")
        {
            if(yourHand == "X")
                return tiePoints;
            if(yourHand == "Y")
                return winPoints;
        }
        if(opponentHand == "B")
        {
            if(yourHand == "Y")
                return tiePoints;
            if(yourHand == "Z")
                return winPoints;
        }
        if(opponentHand == "C")
        {
            if(yourHand == "X")
                return winPoints;
            if(yourHand == "Z")
                return tiePoints;
        }
        // Return points based on hand throw
        return losePoints;
    }



// Since I'm evaluating every round, I might as
    // well make a function that can evaluate
    // the points earned for a single round
function evaluateRound(aRound)
{
    
    // Main function
    //console.log(aRound)
    let roundPoints = 0;
    let you = aRound[1];
    let them = aRound[0];

    // This will provide a point on your thrown shape
    switch(aRound[1])
    {
        // Rock
        case 'X':
            roundPoints += 1;
            break;
        
        // Paper
        case 'Y':
            roundPoints += 2;
            break;

        // Scissors
        case 'Z':
            roundPoints += 3;
            break;

        // Nothing should default,
            // Just placing here for good practice
        default:
                break;
    }

    // Evaluate who won the round
    roundPoints += evaluateShapes(them, you);
    return roundPoints;
}


// We want to add our score for all the rounds that
    // has taken place
let totalScore = 0;
roundResults.forEach(round => {totalScore += evaluateRound(round)});

//console.log(totalScore);


// ====== Part 2 Here =======
// Since my function is very specific, I'm going to make a different one here
function whatToThrow(aRound)
{
    let roundPoints = 0;
    let roundOutcome = aRound[1];
    // Get a hand to throw and add points depending on your throw
    let yourHand = whatToThrowHelper(aRound[0], roundOutcome);
    switch(yourHand)
    {
        // Rock
        case "A":
            roundPoints += 1;
            break;
        // Paper
        case "B":
            roundPoints += 2;
            break;
        // Scissors
        case "C":
            roundPoints += 3;
            break;
        default:
            break;
    }

    // Get points based on the round outcome
    switch(roundOutcome)
    {
        // Lose round
        case "X":
            break;
        // Tie round
        case "Y":
            roundPoints += 3;
            break;
        // Win round
        case "Z":
            roundPoints += 6;
            break;
        default:
            break;
    }

    //console.log(roundPoints);
    return roundPoints;
}

// I want this function to return the appropriate
    // hand to throw given the second column strategy
function whatToThrowHelper(theirHand, roundOutcome)
{
    // You need to win
    if(roundOutcome == "Z")
    {
        if(theirHand == "A")
            return "B"
        if(theirHand == "B")
            return "C"
        if(theirHand == "C")
            return "A"
    }

    // You need to lose
    if(roundOutcome == "X")
    {
        if(theirHand == "A")
            return "C"
        if(theirHand == "B")
            return "A"
        if(theirHand == "C")
            return "B"
    }

    // You need to tie
    return theirHand;
}

// Get the score based on the new strategy
totalScore = 0;
roundResults.forEach(round => {totalScore += whatToThrow(round)});
console.log(totalScore);