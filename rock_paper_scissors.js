// Selecting elements.
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.selection button');
const movesLeftDisplay = document.querySelector('.movesleft');
const showIcon = document.querySelector('.show i');
const computerShowIcon = document.querySelector('.computer i');
const gameStatusMessage = document.getElementById('game-status-message');
const playButton = document.getElementById("play-again");


// Storing the scores.
let computerScore = 1;
let playerScore = 1;
let movesLeft = 5;


const rockIcon = "fas fa-hand-rock";
const paperIcon = "fas fa-hand-paper";
const scissorsIcon = "fas fa-hand-scissors";

const randomClasses = [rockIcon, paperIcon, scissorsIcon];
const text = document.getElementById('result-message');


const tie = () => {
    text.innerHTML = "It's a Tie ! ";
    text.style.color = 'grey';
}

const win = () => {
    text.innerHTML = "You won ! ";
    text.style.color = 'green';
}

const lose = () => {
    text.innerHTML = "Computer won ! ";
    text.style.color = 'red';
}


// Game Functionality.
const game = () => {
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (movesLeft > 0) {
                // Random rock paper scissor for the computer and clicked ones for the player
                let clickedBtn = e.target.className;
                showIcon.className = clickedBtn;
                let randomNum = Math.floor(Math.random() * randomClasses.length);
                computerShowIcon.className = randomClasses[randomNum];

                // If it's a Tie.
                if (showIcon.className === computerShowIcon.className) {
                    pScore.innerHTML = pScore.innerHTML;
                    cScore.innerHTML = cScore.innerHTML;
                    tie();
                }

                // if it's not a Tie.
                else if (showIcon.className === rockIcon && computerShowIcon.className === scissorsIcon) {
                    pScore.innerHTML = playerScore;
                    playerScore++;
                    win();
                } else if (showIcon.className === rockIcon && computerShowIcon.className === paperIcon) {
                    cScore.innerHTML = computerScore;
                    computerScore++;
                    lose();
                } else if (showIcon.className === paperIcon && computerShowIcon.className === scissorsIcon) {
                    cScore.innerHTML = computerScore;
                    computerScore++;
                    lose();
                } else if (showIcon.className === paperIcon && computerShowIcon.className === rockIcon) {
                    pScore.innerHTML = playerScore;
                    playerScore++;
                    win();
                } else if (showIcon.className === scissorsIcon && computerShowIcon.className === rockIcon) {
                    cScore.innerHTML = computerScore;
                    computerScore++;
                    lose();
                } else if (showIcon.className === scissorsIcon && computerShowIcon.className === paperIcon) {
                    pScore.innerHTML = playerScore;
                    playerScore++;
                    win();
                }

                movesLeft--;
                movesLeftDisplay.textContent = `Moves Left: ${movesLeft}`;
            }

            if (movesLeft == 0) {
                if (playerScore > computerScore) {
                    gameStatusMessage.textContent = 'Game Over!! You win the game!';
                    gameStatusMessage.style.color = 'green';
                } else if (playerScore < computerScore) {
                    gameStatusMessage.textContent = 'Game Over!! You lose the game!';
                    gameStatusMessage.style.color = 'red';
                } else {
                    gameStatusMessage.textContent = 'Game Over!! Tie';
                    gameStatusMessage.style.color = 'grey';
                }
            }
        });
    });
}

// Run the game.
game();



// Function to reset the game
playButton.addEventListener("click", function () {
    playerScore = 1;
    computerScore = 1;
    movesLeft = 5;
    pScore.innerHTML = '0';
    cScore.innerHTML = '0';
    text.innerHTML = 'Make your choice...';
    gameStatusMessage.innerHTML = 'Game in progress..';
    movesLeftDisplay.innerHTML = `Moves Left: ${movesLeft}`;
});

