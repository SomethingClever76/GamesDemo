let currentPlayer = "X";
let onStart = document.getElementById("onstart");
let displayTurn = document.getElementById("playerturn");
let winner = document.getElementById("winner");
let clear = document.getElementById("clear");

let displayWinner = function () {
    displayTurn.remove();
    currentPlayer === "O" ? currentPlayer = "X" : currentPlayer = "O";
    winner.innerText = currentPlayer + " is the Winner!";
    setTimeout(function () {
        if (confirm("Start a new game?")) {
            location.reload();
        } else {
            clear.innerHTML = "Thank you for playing Tic-Tac-Toe!";
            clear.style.fontWeight = "bold";
            clear.style.fontSize = "20px";
        }
    }, 1000);
}

function playerStart() {
    onStart.innerHTML = "Good Luck!";
    onStart.style.fontWeight = "bold";
    onStart.style.fontSize = "18px";
    Math.random() < 0.5
        ? (currentPlayer = "X", displayTurn.innerText = "X goes first.")
        : (currentPlayer = "O", displayTurn.innerText = "O goes first.");
}

function playerTurn() {
    displayTurn.innerText = "It is " + currentPlayer + "'s turn.";
}

function place(box) {
    if (box.innerText != "") return;
    box.innerText = currentPlayer;
    currentPlayer === "O" ? currentPlayer = "X" : currentPlayer = "O";
    checkGameBoard() || playerTurn();
}

function checkGameBoard() {
    for (let i = 0; i <= 2; i++) {
        let rowFirst = document.getElementById("0_" + i).innerText;
        let rowSecond = document.getElementById("1_" + i).innerText;
        let rowThird = document.getElementById("2_" + i).innerText;

        checkWinner(rowFirst, rowSecond, rowThird);

        let colFirst = document.getElementById(i + "_0").innerText;
        let colSecond = document.getElementById(i + "_1").innerText;
        let colThird = document.getElementById(i + "_2").innerText;

        checkWinner(colFirst, colSecond, colThird);
    }

    let diag1First = document.getElementById("0_0").innerText;
    let diag1Second = document.getElementById("1_1").innerText;
    let diag1Third = document.getElementById("2_2").innerText;

    checkWinner(diag1First, diag1Second, diag1Third);

    let diag2First = document.getElementById("0_2").innerText;
    let diag2Second = document.getElementById("1_1").innerText;
    let diag2Third = document.getElementById("2_0").innerText;

    checkWinner(diag2First, diag2Second, diag2Third);
}

function checkWinner(first, second, third) {
    if (first != "" && first === second && first === third) {
        displayWinner();
    }
}