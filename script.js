// Rock Paper Scissors

// Score counters

let wins = 0;
let losses = 0;
let draws = 0;

//  Generating computer's choice...

const computerPlay = () => {
    let choice = Math.floor(Math.random() * 3);

    if(choice === 1) {
        return 'rock';
    } else if (choice === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
};

// Calculating round results

const playRound = (playerChoice, computerChoice) => {
    if(playerChoice.toLowerCase() === computerChoice) {
        draws++;
        console.log("It's a draw!");
    } else if (playerChoice.toLowerCase() === 'rock' && computerChoice === 'paper') {
        losses++;
        console.log("You lose! Paper beats rock.");
    } else if (playerChoice.toLowerCase() === 'rock' && computerChoice === 'scissors') {
        wins++;
        console.log("You win! Rock beats scissors.");
    } else if (playerChoice.toLowerCase() === 'paper' && computerChoice === 'rock') {
        wins++;
        console.log("You win! Paper beats rock.");
    } else if (playerChoice.toLowerCase() === 'paper' && computerChoice === 'scissors') {
        losses++;
        console.log("You lose! Scissors beat paper.");
    }   else if (playerChoice.toLowerCase() === 'scissors' && computerChoice === 'rock') {
        losses++;
        console.log("You lose! Rock beats scissors.");
    }   else if (playerChoice.toLowerCase() === 'scissors' && computerChoice === 'rock') {
        wins++;
        console.log("You win! Scissors beat paper.");
    } else {
        invalidChoice++;
        console.log("Uh oh! Something went wrong.");
    }
};

let playerChoice;
let computerChoice = computerPlay();

// A counter for cases when the player inputs an invalid value

let invalidChoice = 0;

// Running the game up to 5 rounds

for (let i = 0; i < 5; i++) {
    playerChoice = prompt('Choose your weapon!', 'rock');
    computerChoice = computerPlay();

    console.log(`your weapon: ${playerChoice}`);
    console.log(`computer's weapon: ${computerChoice}`);

    playRound(playerChoice, computerChoice);

    console.log(`Wins: ${wins}, Losses: ${losses}, Ties: ${draws}`);

    if(invalidChoice > 0) {
        i--;
        invalidChoice--;
    };
};

// Calculating and showing game results

if(wins > losses) {
    console.log('Congratulations! You won!')
} else if (wins < losses) {
    console.log('You lost! Better luck next time.');
} else {
    console.log('The heck?! You tied!');
};



