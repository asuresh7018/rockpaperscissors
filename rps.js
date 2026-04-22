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
    const resultElem = document.querySelector("#results");
    switch(humanChoice) {
        case "rock": {
            if (computerChoice === "rock") {
                resultElem.innerText = "Draw!";
                break;
            }
            else if (computerChoice === "scissors") {
                resultElem.innerText = "You win! Rock beats Scissors.";
                humanScore++;
                break;
            }
            else {
                resultElem.innerText = "You lose! Paper beats rock.";
                computerScore++;
                break;
            }
        }
        case "paper": {
            if (computerChoice === "paper") {
                resultElem.innerText = "Draw!";
                break;
            }
            else if (computerChoice === "rock") {
                resultElem.innerText = "You win! Paper beats Rock.";
                humanScore++;
                break;
            }
            else {
                resultElem.innerText = "You lose! Scissors beats Paper.";
                computerScore++;
                break;
            }
        }
        case "scissors": {
            if (computerChoice === "scissors") {
                resultElem.innerText = "Draw!";
                break;
            }
            else if (computerChoice === "paper") {
                resultElem.innerText = "You win! Scissors beats Paper.";
                humanScore++;
                break;
            }
            else {
                resultElem.innerText = "You lose! Rock beats Scissors.";
                computerScore++;
                break;
            }
        }
    }
}

function doRound(humanChoice) {
    if (!(humanScore === 5 || computerScore === 5)) {
        const cpuChoice = getComputerChoice();
        playRound(humanChoice, cpuChoice);
        const scoreElem = document.querySelector("#score");
        scoreElem.innerText =  `${humanScore}-${computerScore}`;
    }  
    if (humanScore === 5 || computerScore === 5) {
        const resultElem = document.querySelector("#results");
        if (humanScore > computerScore) {
            resultElem.innerText = "Game Over! You win!";
        }
        else {
            resultElem.innerText = "Game Over! You lose!";
        }
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        doRound(button.id);
    });
    }
)