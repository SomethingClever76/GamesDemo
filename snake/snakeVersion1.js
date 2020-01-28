let board = [
    "###############",
    "#             #",
    "#             #",
    "#             #",
    "#    ####     #",
    "#    ####     #",
    "#             #",
    "#             #",
    "#             #",
    "###############"
];

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let currentYoffset = 0;
let squareSize = 30;

board.forEach(function checkLine(line) {
    line = line.split('');
    let currentXoffset = 0;
    line.forEach(function checkCharacter(character) {
        if (character === '#') {
            ctx.fillStyle = "black";
            ctx.fillRect(currentXoffset, currentYoffset, squareSize, squareSize);
        }
        currentXoffset += squareSize;
    });
    currentYoffset += squareSize;
});

// ctx.fillStyle = "green";

// ctx.fillRect(0, 0, 30, 30);

// // ctx.clearRect(0, 0, 300, 300);