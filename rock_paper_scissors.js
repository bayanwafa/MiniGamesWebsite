// rock_paper_scissors.js

// Comments have been added to help understand the purpose of each section and the logic of the Rock Paper Scissors game.

// Selecting elements from the HTML document.
const pScore = document.getElementById('playerScore'); // Player's score display
const cScore = document.getElementById('computerScore'); // Computer's score display
const buttons = document.querySelectorAll('.selection button'); // Rock, Paper, and Scissors buttons
const movesLeftDisplay = document.querySelector('.movesleft'); // Display for remaining moves
const showIcon = document.querySelector('.show i'); // Player's chosen icon display
const computerShowIcon = document.querySelector('.show-computer i'); // Computer's chosen icon display
const gameStatusMessage = document.getElementById('game-status-message'); // Game status message
const playButton = document.getElementById("play-again"); // Play Again button


// Storing scores and moves left.
// Initialize computer's score and player's score
// Number of moves allowed in the game
let computerScore = 1;
let playerScore = 1;
let movesLeft = 5;

// Class names for Rock, Paper, and Scissors icons.
const rockIcon = "fas fa-hand-rock";
const paperIcon = "fas fa-hand-paper";
const scissorsIcon = "fas fa-hand-scissors";

// Array of class names for random computer choices.
const randomClasses = [rockIcon, paperIcon, scissorsIcon];

const text = document.getElementById('result-message');


// Function to display a tie result.
const tie = () => {
    text.innerHTML = "It's a Tie ! ";
    text.style.color = 'grey';
}

// Function to display a win result.
const win = () => {
    text.innerHTML = "You won ! ";
    text.style.color = 'green';
}

// Function to display a lose result.
const lose = () => {
    text.innerHTML = "Computer won ! ";
    text.style.color = 'red';
}


// Game Functionality.
const game = () => {
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Logic for gameplay and determining the winner.
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

            // Display game over message and result.
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
    // Reset scores, moves left, and message to restart the game.
    playerScore = 1;
    computerScore = 1;
    movesLeft = 5;
    pScore.innerHTML = '0';
    cScore.innerHTML = '0';
    text.innerHTML = 'Make your choice...';
    gameStatusMessage.innerHTML = 'Game in progress..';
    movesLeftDisplay.innerHTML = `Moves Left: ${movesLeft}`;
});
