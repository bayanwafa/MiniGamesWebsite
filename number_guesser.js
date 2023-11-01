// Function to start the game
document.getElementById("guessButton").addEventListener("click", function () {
    // Get a random number between 1 - 10 (inclusive)
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    // Get the user's input
    const guessedNumber = parseInt(document.getElementById("userGuess").value);

    // Compare the number guessed to the random number
    if (guessedNumber === randomNumber) {
        document.getElementById("result").textContent = 'You win! The number is: ' + guessedNumber;
        document.getElementById("result").style.color = 'darkorange';
        document.querySelector(".winner-img").style.display = 'block';
    } else {
        if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 10) {
            document.getElementById("result").textContent = 'Invalid user input: ' + guessedNumber;
        } else {
            if (guessedNumber > randomNumber) {
                document.getElementById("result").textContent = 'The guessed number is too high ' + guessedNumber + ' > ' + randomNumber;
            }
            if (guessedNumber < randomNumber) {
                document.getElementById("result").textContent = 'The guessed number is too low ' + guessedNumber + ' < ' + randomNumber;
            }
        }
    }
});