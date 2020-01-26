// Establishes currentPlayer variable as "X" by default - in case the player doesn't click to determine playerStart.
// Also declares other variables to simplify code.
let currentPlayer = "X";
let displayTurn = document.getElementById("playerturn");
let winner = document.getElementById("winner");
// What we want to happen if a winner is found.
let displayWinner = function () {
    displayTurn.remove();
    currentPlayer === "O" ? currentPlayer = "X" : currentPlayer = "O";
    winner.innerText = currentPlayer + " is the Winner!";
    setTimeout(function () {
        if (confirm("Start a new game?")) {
            location.reload();
        } else {
            document.getElementById("clear").innerHTML = "Thank you for playing Tic-Tac-Toe!";
        }
    }, 1000);
}

// Allows players to randomly select who will make the first move.
function playerStart() {
    document.getElementById("playerstart").remove();
    Math.random() < 0.5
        ? (currentPlayer = "X", displayTurn.innerText = "X goes first!")
        : (currentPlayer = "O", displayTurn.innerText = "O goes first!");
}

// Displays whose turn it is.
function playerTurn() {
    displayTurn.innerText = "It is " + currentPlayer + "'s turn.";
}

// Adds an "X" or "O" to the selected box on the game board, checks for a winner, and updates whose turn it is.
function place(box) {
    if (box.innerText != "") return;
    box.innerText = currentPlayer;
    currentPlayer === "O" ? currentPlayer = "X" : currentPlayer = "O";
    checkGameBoard() || playerTurn();
}

// Checks for winning combinations.
function checkGameBoard() {
    for (let i = 0; i <= 2; i++) {
        let rowFirst = document.getElementById("0_" + i).innerText;
        let rowSecond = document.getElementById("1_" + i).innerText;
        let rowThird = document.getElementById("2_" + i).innerText;

        if (rowFirst === "") continue;
        if (rowFirst === rowSecond && rowFirst === rowThird) {
            displayWinner();
        }
    }

    for (let i = 0; i <= 2; i++) {
        let colFirst = document.getElementById(i + "_0").innerText;
        let colSecond = document.getElementById(i + "_1").innerText;
        let colThird = document.getElementById(i + "_2").innerText;

        if (colFirst === "") continue;
        if (colFirst === colSecond && colFirst === colThird) {
            displayWinner();
        }
    }

    let diag1First = document.getElementById("0_0").innerText;
    let diag1Second = document.getElementById("1_1").innerText;
    let diag1Third = document.getElementById("2_2").innerText;

    if (diag1First != "" && diag1First === diag1Second && diag1First === diag1Third) {
        displayWinner();
    }

    let diag2First = document.getElementById("0_2").innerText;
    let diag2Second = document.getElementById("1_1").innerText;
    let diag2Third = document.getElementById("2_0").innerText;

    if (diag2First != "" && diag2First === diag2Second && diag2First === diag2Third) {
        displayWinner();
    }
}