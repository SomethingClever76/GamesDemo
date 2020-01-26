let currentPlayer = "X";
let won = false;
let onStart = document.getElementById("onstart");
let displayTurn = document.getElementById("playerturn");
let winner = document.getElementById("winner");
let clear = document.getElementById("clear");
let breakTag = document.createElement('br');
let displayWinner = function () {
    currentPlayer === "O" ? currentPlayer = "X" : currentPlayer = "O";
    setTimeout(function () {
        confirm(currentPlayer + " is the Winner! Start a new game?")
            ? location.reload()
            : clear.innerHTML = "Thank you for playing Tic-Tac-Toe!";
        clear.appendChild(breakTag);
    }, 500);
}

function playerStart() {
    onStart.innerHTML = "Good Luck!";
    Math.random() < 0.5
        ? (currentPlayer = "X", displayTurn.innerText = "X goes first.")
        : (currentPlayer = "O", displayTurn.innerText = "O goes first.");
}

function playerTurn() {
    if (onStart.innerHTML != "") {
         onStart.innerHTML = "";
         onStart.appendChild(breakTag);
    } 
    displayTurn.innerText = "It is " + currentPlayer + "'s turn.";
}

function place(box) {
    if (box.innerText != "" || won) return;
    box.innerText = currentPlayer;
    currentPlayer === "O" ? currentPlayer = "X" : currentPlayer = "O";
    checkGameBoard() || playerTurn();
}

function checkGameBoard() {
    for (let i = 0; i <= 2; i++) {
        checkWinner(document.getElementById("0_" + i).innerText,
            document.getElementById("1_" + i).innerText,
            document.getElementById("2_" + i).innerText);
        checkWinner(document.getElementById(i + "_0").innerText,
            document.getElementById(i + "_1").innerText,
            document.getElementById(i + "_2").innerText);
    }
    checkWinner(document.getElementById("0_0").innerText,
        document.getElementById("1_1").innerText,
        document.getElementById("2_2").innerText);
    checkWinner(document.getElementById("0_2").innerText,
        document.getElementById("1_1").innerText,
        document.getElementById("2_0").innerText);
}

function checkWinner(first, second, third) {
    if (first != "" && first === second && first === third) {
        displayWinner();
        won = true;
    }
}