//your JS code here. If required.
// Get the submit button
const submitButton = document.getElementById('submit');

// Get the player input fields
const player1Input = document.getElementById('player-1');
const player2Input = document.getElementById('player-2');

// Get the game view elements
const gameView = document.querySelector('.game-view');
const board = document.querySelector('.board');
const messageElement = document.querySelector('.message');

// Get the cell elements
const cells = document.querySelectorAll('.cell');

// Initialize the game state
let currentPlayer = 'X';
let player1Name = '';
let player2Name = '';
let gameOver = false;

// Function to handle submit button click
function handleSubmitButtonClick() {
    // Get the player names
    player1Name = player1Input.value;
    player2Name = player2Input.value;

    // Show the game view
    gameView.style.display = 'block';

    // Update the message element
    messageElement.textContent = `${player1Name}, you're up`;
}

// Function to handle cell click
function handleCellClick(event) {
    // Get the clicked cell
    const cell = event.target;

    // Check if the game is over
    if (gameOver) {
        return;
    }

    // Check if the cell is already occupied
    if (cell.textContent !== '') {
        return;
    }

    // Update the cell text content
    cell.textContent = currentPlayer;

    // Check if the current player has won
    if (checkWin()) {
        gameOver = true;
        messageElement.textContent = `${currentPlayer === 'X' ? player1Name : player2Name} congratulations, you won!`;
    } else {
        // Switch the current player
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        messageElement.textContent = `${currentPlayer === 'X' ? player1Name : player2Name}, you're up`;
    }
}

//
