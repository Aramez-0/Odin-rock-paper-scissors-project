/*let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function getComputerChoice() {
    const choices = [rock, paper, scissors];
    let result = choices[Math.floor(Math.random() * choices.length)];
    console.log(result);
    return result;
}

function getHumanChoice() {
    let choice = prompt("Choose rock, paper or scissors").toLowerCase();
    
    if (choice == "rock") {
        choice = rock;
    } else if (choice == "paper") {
        choice = paper;
    } else {
        choice = scissors;
    }
    
    if (choice == rock) {
        console.log(rock);
    } else if (choice == paper) {
        console.log(paper);
    } else {
        console.log(scissors);
    }
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let score = [0, 0]
    

    playRound(humanSelection, computerSelection);

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == rock && computerChoice == scissors || humanChoice == paper && computerChoice == rock || humanChoice == scissors && computerChoice == paper) {
            win = console.log("Congratulations, you won");
            score[0] ++;
            console.log("Computer score: " + score[1]);
            console.log("Player score: " + score[0]);
        } else if (humanChoice == computerChoice) {
            console.log("it's a draw");
        } else {
            console.log("Unlucky, you lost");
            score[1] ++;
            console.log("Computer score: " + score[1]);
            console.log("Player score: " + score[0]);
        }
    }
    return score;
}

let counter = playGame();
console.log(counter);

getHumanChoice();
getComputerChoice();
playGame();
console.log(counter);

getHumanChoice();
getComputerChoice();
playGame();
console.log(counter);

getHumanChoice();
getComputerChoice();
playGame();
console.log(counter);

getHumanChoice();
getComputerChoice();
playGame();
console.log(counter);*/


//game displays same win/lose/draw outcome after first

//don't know how to store and then add onto counter variable after each round
//added score array which should help separate and add onto each value. Hopefully

//gg


//this is chatgpt fix. makles me feel incompetent, makes me feel bad about myself. hopefully i can learn something from it.

let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";

// Function to get the computer's choice
function getComputerChoice() {
    const choices = [rock, paper, scissors];
    let result = choices[Math.floor(Math.random() * choices.length)];
    console.log("Computer chose: " + result);
    return result;
}

// Function to get the player's choice
function getHumanChoice() {
    let choice = prompt("Choose rock, paper or scissors").toLowerCase();

    if (choice == "rock") {
        choice = rock;
    } else if (choice == "paper") {
        choice = paper;
    } else {
        choice = scissors;
    }

    console.log("You chose: " + choice);
    return choice;
}

// Function to play a single round and return the result
function playRound(humanChoice, computerChoice) {
    if (humanChoice == rock && computerChoice == scissors || 
        humanChoice == paper && computerChoice == rock || 
        humanChoice == scissors && computerChoice == paper) {
        console.log("Congratulations, you won");
        return 1; // Player wins
    } else if (humanChoice == computerChoice) {
        console.log("It's a draw");
        return 0; // Draw
    } else {
        console.log("Unlucky, you lost");
        return -1; // Computer wins
    }
}

// Function to run the game for 5 rounds
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}:`);

        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        // Play the round and update the score
        let roundResult = playRound(humanChoice, computerChoice);

        if (roundResult === 1) {
            humanScore++;
        } else if (roundResult === -1) {
            computerScore++;
        }

        // Print the scores after each round
        console.log(`Player score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
        console.log('---');
    }

    // Final scores
    console.log("Game Over!");
    console.log(`Final Player score: ${humanScore}`);
    console.log(`Final Computer score: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Computer won the game!");
    } else {
        console.log("It's a tie game!");
    }
}

// Start the game
playGame();

