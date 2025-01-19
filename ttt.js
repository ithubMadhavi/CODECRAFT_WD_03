let board = ['', '', '', '', '', '', '', '', '']; // Empty board
let currentPlayer = 'X'; // Player X starts the game
let gameOver = false;

const statusElement = document.getElementById('status');
const cells = document.querySelectorAll('.cell');

function makeMove(index) {
    if (board[index] !== '' || gameOver) return; // Ignore if cell is already filled or the game is over

    board[index] = currentPlayer;
    cells[index].textContent = currentPlayer;

    if (checkWinner(currentPlayer)) {
        gameOver = true;
        statusElement.textContent = `${currentPlayer} wins!`;
        return;
    } else if (board.every(cell => cell !== '')) {
        gameOver = true;
        statusElement.textContent = "It's a draw!";
        return;
    }

    // Switch players
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusElement.textContent = `Player ${currentPlayer}'s turn`;
}

function checkWinner(player) {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]  // Diagonals
    ];

    return winPatterns.some(pattern => {
        return pattern.every(index => board[index] === player);
    });
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameOver = false;
    statusElement.textContent = `Player ${currentPlayer}'s turn`;

    // Clear the board
    cells.forEach(cell => cell.textContent = '');
}
