let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";
let roundsText = document.querySelector("#rounds-text");

// Function to get the computer's choice
function getComputerChoice() {
    const choices = [rock, paper, scissors];
    let result = choices[Math.floor(Math.random() * choices.length)];
    roundsText.textContent = `Computer chose: ${result}\r\n`;
    return result;
}

// Function to play a single round and return the result
function playRound(humanChoice, computerChoice) {
    if (humanChoice == rock && computerChoice == scissors || 
        humanChoice == paper && computerChoice == rock || 
        humanChoice == scissors && computerChoice == paper) {
        roundsText.textContent += "Congratulations, you won\r\n";
        return 1; // Player wins
    } else if (humanChoice == computerChoice) {
        roundsText.textContent += "It's a draw\r\n";
        return 0; // Draw
    } else {
        roundsText.textContent += "Unlucky, you lost\r\n";
        return -1; // Computer wins
    }
}

// Function to play the game for 5 rounds and annouce the winner
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    let rockButton = document.querySelector("#rock-button");

    rockButton.addEventListener("click", (event) => {
        let computerChoice = getComputerChoice();
        let roundResult = playRound(rock, computerChoice);
        
        switch (roundResult) {
            case 1:
                humanScore++;
                break;
            case -1:
                computerScore++;
        };
        
        roundsText.textContent += 
        `Player score: ${humanScore}\r\nComputer score: ${computerScore}`;
        
        if (computerScore === 5 || humanScore === 5) {
            roundsText.textContent = 
            `Game Over!\r\nFinal Player score: ${humanScore}\r\nFinal Computer score: ${computerScore}\r\n`;

            if (humanScore > computerScore) {
                roundsText.textContent += "You won the game!\r\n";
            } else if (humanScore < computerScore) {
                roundsText.textContent += "Computer won the game!\r\n";
            } else {
                roundsText.textContent += "It's a tie game!\r\n";
            };
            
            humanScore = 0;
            computerScore = 0;
            roundsText.textContent += "\nStarting a new game...";
        };
    });
        
    let paperButton = document.querySelector("#paper-button");
        
    paperButton.addEventListener("click", (event) => {
        let computerChoice = getComputerChoice();
        let roundResult = playRound(paper, computerChoice);
        
        switch (roundResult) {
            case 1:
                humanScore++;
                break;
            case -1:
                computerScore++;
        };
        
        roundsText.textContent += 
        `Player score: ${humanScore}\r\nComputer score: ${computerScore}`;
        
        if (computerScore === 5 || humanScore === 5) {
            roundsText.textContent = 
            `Game Over!\r\nFinal Player score: ${humanScore}\r\nFinal Computer score: ${computerScore}\r\n`;

            if (humanScore > computerScore) {
                roundsText.textContent += "You won the game!\r\n";
            } else if (humanScore < computerScore) {
                roundsText.textContent += "Computer won the game!\r\n";
            } else {
                roundsText.textContent += "It's a tie game!\r\n";
            };
            
            humanScore = 0;
            computerScore = 0;
            roundsText.textContent += "\nStarting a new game...";
        };
    });
        
    let scissorsButton = document.querySelector("#scissors-button");
        
    scissorsButton.addEventListener("click", (event) => {
        let computerChoice = getComputerChoice();
        let roundResult = playRound(scissors, computerChoice);
        
        switch (roundResult) {
            case 1:
                humanScore++;
                break;
            case -1:
                computerScore++;
        };
        
        roundsText.textContent += 
        `Player score: ${humanScore}\r\nComputer score: ${computerScore}`;
        
        if (computerScore === 5 || humanScore === 5) {
            roundsText.textContent = 
            `Game Over!\r\nFinal Player score: ${humanScore}\r\nFinal Computer score: ${computerScore}\r\n`;

            if (humanScore > computerScore) {
                roundsText.textContent += "You won the game!\r\n";
            } else if (humanScore < computerScore) {
                roundsText.textContent += "Computer won the game!\r\n";
            } else {
                roundsText.textContent += "It's a tie game!\r\n";
            };
            
            humanScore = 0;
            computerScore = 0;
            roundsText.textContent += "\nStarting a new game...";
        };
    });
};

// Start the game
playGame();

