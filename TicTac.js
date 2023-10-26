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
    currentPlayer = "X";
    gameOver = false;
    board.fill("");
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.textContent = "";
        square.classList.remove("X", "O");
    });
}
