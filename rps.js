// Returns a random value between "rock", "paper" or "scissors"
function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);
    switch(randomInt) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

// Prompts the user for a choice between "rock", "paper" or "scissors"
// Not case sensitive
function getHumanChoice() {
    let userChoice = prompt("Rock/Paper/Scissors?");
    return userChoice;
}

let humanScore = 0;
let computerScore = 0;

// Play one round of rock, paper, scissors
function playRound(humanChoice, computerChoice) {
    humanChoice = String(humanChoice).toLowerCase();
    switch(humanChoice) {
        case "rock": {
            if (computerChoice === "rock") {
                console.log("Draw!");
                break;
            }
            else if (computerChoice === "scissors") {
                console.log("You win! Rock beats Scissors.");
                humanScore++;
                break;
            }
            else {
                console.log("You lose! Paper beats rock.");
                computerScore++;
                break;
            }
        }
        case "paper": {
            if (computerChoice === "paper") {
                console.log("Draw!");
                break;
            }
            else if (computerChoice === "rock") {
                console.log("You win! Paper beats Rock.");
                humanScore++;
                break;
            }
            else {
                console.log("You lose! Scissors beats Paper.");
                computerScore++;
                break;
            }
        }
        case "scissors": {
            if (computerChoice === "scissors") {
                console.log("Draw!");
                break;
            }
            else if (computerChoice === "paper") {
                console.log("You win! Scissors beats Paper.");
                humanScore++;
                break;
            }
            else {
                console.log("You lose! Rock beats Scissors.");
                computerScore++;
                break;
            }
        }
    }
}

const rounds = [1,2,3,4,5];

for (const round of rounds) {
    console.log("Round " + round);

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
}

if (humanScore > computerScore) {
    console.log("Final result: You win!");
}
else if (computerScore > humanScore) {
    console.log("Final result: You lose!");
}
else {
    console.log("Final result: Draw!");
}
console.log(`Final score was ${humanScore}-${computerScore}`);