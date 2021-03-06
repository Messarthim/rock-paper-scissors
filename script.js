// Rock Paper Scissors

// UI Assigning

const buttonsChoice = document.querySelectorAll('.btn-choice');

let resultsText = document.getElementById('results');
let compPoints = document.getElementById('comp-points');
let playerPoints = document.getElementById('player-points');

// Score counters

let wins = 0;
let losses = 0;

// Disabling buttons at game over

const disableButtons = () => {
    buttonsChoice.forEach(button => {
        button.disabled = true;
    });
}

//  Generating computer's choice...

const computerPlay = () => {
    let choice = Math.floor(Math.random() * 3);

    switch(choice) {
        case 0:
            return 'rock';

        case 1:
            return 'paper';

        case 2:
            return 'scissors';
    }
};

// Calculating round results

function playRound(playerChoice) {

    let computerChoice = computerPlay();

    if((playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')) {
            playerPoints.textContent = ++wins;
            resultsText.innerHTML = (`You win, ${playerChoice} beats ${computerChoice}.`);

            if(wins === 5) {
                resultsText.innerHTML = ('You won the game!');
                disableButtons();
            };
        } else if(playerChoice === computerChoice) {
            resultsText.innerHTML = (`It's a draw, you both chose ${playerChoice}.`);
        } else {
            compPoints.textContent = ++losses;
            resultsText.innerHTML = (`You lost, ${computerChoice} beats ${playerChoice}.`);

            if(losses === 5) {
                resultsText.innerHTML = ('You lost, try again.');
                disableButtons();
            };
        }
};

buttonsChoice.forEach(button => {
    button.addEventListener('click', function(){
        playRound(button.value);
    });
});