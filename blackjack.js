let computerSelection = 0;
let totalNumber = 0;
window.onload = StartOver;

function StartOver() {
    computerSelection = Math.floor(Math.random() * 5)
    totalNumber = computerSelection;
    document.getElementById("btnUserEntry").disabled = false;
    document.getElementById("image1").disabled = false;
    document.getElementById("image2").disabled = false;
    document.getElementById("image3").disabled = false;
    document.getElementById("image4").disabled = false;
    document.getElementById("image5").disabled = false;
    document.getElementById("userSelectedNumber").value = 0;
    document.getElementById("result").textContent = '';

}

function AddUserSelection(cardNumber) {
    totalNumber += cardNumber;
    //the user lost because they exceeded 21
    if (totalNumber > 21) {
        document.getElementById("result").textContent = 'Your total: ' + totalNumber + " exceeded 21. Please click on Start Over to play again!";
        DisableUserInputControls();
    }
    //the user won exactly 21
    if (totalNumber == 21) {
        document.getElementById("result").textContent = 'Congratulations!  You won!!!  Click the Start Over button to begin a new game.';
        DisableUserInputControls();
    }
}
function DisableUserInputControls() {
    document.getElementById("btnUserEntry").disabled = true;
    document.getElementById("image1").disabled = true;
    document.getElementById("image2").disabled = true;
    document.getElementById("image3").disabled = true;
    document.getElementById("image4").disabled = true;
    document.getElementById("image5").disabled = true;
}

document.getElementById("btnUserEntry").addEventListener("click", function () {

    // Get the user's input
    const userSelectedNumber = parseInt(document.getElementById("userSelectedNumber").value);

    // Compare the number guessed to the random number

    if (isNaN(userSelectedNumber) || userSelectedNumber < 1 || userSelectedNumber > 5) {
        document.getElementById("result").textContent = 'Invalid user input: ' + userSelectedNumber + ". Valid range is 1 - 5";
    } else {
        AddUserSelection(userSelectedNumber);
        document.getElementById("result").textContent = '';
    }

});

