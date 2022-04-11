// The game board is an empty array of cells
const gameBoard = {
    cells: [
        "", "", "",
        "", "", "",
        "", "", "",
    ]
};

const cell1 = document.querySelector('#c1');
const cell2 = document.querySelector('#c2');
const cell3 = document.querySelector('#c3');
const cell4 = document.querySelector('#c4');
const cell5 = document.querySelector('#c5');
const cell6 = document.querySelector('#c6');
const cell7 = document.querySelector('#c7');
const cell8 = document.querySelector('#c8');
const cell9 = document.querySelector('#c9');
const cells = document.querySelectorAll('.cell');

const game = {
    // add counter and gamePlay here
}

let counter = 0;

cells.forEach((cell) => {
    cell.addEventListener('click', () => {
        if (counter % 2 === 0) {
            cell.textContent = "O";
        } else {
            cell.textContent = "X";
        }

        counter++;
        console.log("round: " + counter)
        console.log(cell.innerHTML)
    });
});

function snitch() {
    if (cell1.innerHTML == "O")
        console.log("player one");
}
snitch();



function Player(name, marker) {
    this.name = name
    this.marker = marker
    this.sayName = function () {
        console.log(name)
    }
}

const player1 = new Player('paul', 'O');
const player2 = new Player('kevin', 'X');




// Game Over
function gameOver(winner) {
    if (
        (gameBoard.cells[0] === gameBoard.cells[1] === gameBoard.cells[2]) ||
        (gameBoard.cells[3] === gameBoard.cells[4] === gameBoard.cells[5]) ||
        (gameBoard.cells[6] === gameBoard.cells[7] === gameBoard.cells[8]) ||
        (gameBoard.cells[0] === gameBoard.cells[3] === gameBoard.cells[6]) ||
        (gameBoard.cells[1] === gameBoard.cells[4] === gameBoard.cells[7]) ||
        (gameBoard.cells[2] === gameBoard.cells[5] === gameBoard.cells[8]) ||
        (gameBoard.cells[0] === gameBoard.cells[4] === gameBoard.cells[8]) ||
        (gameBoard.cells[2] === gameBoard.cells[4] === gameBoard.cells[6])
    ) {
        // code
    }

    console.log("Congratulations!")
    console.log(winner.name + " is the winner!")
}






// Reload button functionality
function reload() {
    const reload = document.querySelector('.reload');
    reload.addEventListener('click', () => {
        window.location.reload();
        console.log("reloading...");
    });
}
reload();