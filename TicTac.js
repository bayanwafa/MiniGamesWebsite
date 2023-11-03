let board = Array(9).fill("");
let currentPlayer = "X";
let playerCount = 0;
let computerCount = 0;
let tieCount = 0;
let gameOver = false;

function makeMove(square) {
    const index = parseInt(square.dataset.index);

    if (board[index] === "" && !gameOver) {
        board[index] = currentPlayer;
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);

        if (checkWin(currentPlayer)) {
            updateWinCount(currentPlayer);
            gameOver = true;
        } else if (board.every((cell) => cell !== "")) {
            tieCount++;
            document.getElementById("tie-count").textContent = tieCount;
            gameOver = true;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";

            if (currentPlayer === "O" && !gameOver) {
                setTimeout(() => computerMove(), 1000);
            }
        }
    }
}

function computerMove() {
    const emptySquares = board.map((cell, index) => (cell === "" ? index : -1)).filter((index) => index !== -1);
    const randomIndex = emptySquares[Math.floor(Math.random() * emptySquares.length)];
    makeMove(document.querySelectorAll(".square")[randomIndex]);
}

function checkWin(player) {
    const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    return winCombos.some((combo) => combo.every((index) => board[index] === player));
}

function updateWinCount(player) {
    player === "X" ? playerCount++ : computerCount++;
    document.getElementById(player === "X" ? "player-count" : "computer-count").textContent =
        player === "X" ? playerCount : computerCount;
}

function restartGame() {
    board = Array(9).fill("");
    currentPlayer = "X";
    gameOver = false;
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.textContent = "";
        square.classList.remove("X", "O");
    });
}

// // scores for you and the computer
// let playerScore = 0;
// let computerScore = 0;
// // Initialize a counter to keep track of the number of games played
// let gameCount = 0;

// // Function to update scores and check for game result
// function updateScores(winner) {
//     if (winner === "you") {
//         // If you won a game, increase your score
//         playerScore++;
//     } else if (winner === "computer") {
//         // If the computer won a game, increase your score
//         computerScore++;
//     }

//     // increase the game count for each game played
//     gameCount++;

//     // Check for the specified conditions
//     if (playerScore == 2) {
//       console.log("You're the winner!!");
//         restartGame();
//     } else if (computerScore == 2) {
//         console.log("Computer is the winner!!");
//         restartGame();
//     } else if (playerScore == 1 && computerCount == 1) {
//         console.log("It's a tie!!")
//         restartGame();
//     }

// }

// // Function to display messages in the .count-bar element
// function restartGameTic() {
//     playerScore = 0;
//     computerScore = 0;
//     gameCount = 0;
// }

// // Function to display messages in the .count-bar element
// function displayMessage(message) {
//     const countBar = document.querySelector('.count-bar');
//     querySelector.textContent = message;
// }

// // call updateScores with the winner
// updateScores("You");
// updateScores("computer");
// updateScores("you"); // You won another game

