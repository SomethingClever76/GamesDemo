let game = {
    board: [
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
    ]
};

let snake = {
    parts: [
        // head
        { x: 4, y: 2 },
        // middle
        { x: 3, y: 2 },
        // tail
        { x: 2, y: 2 }
    ],
    // direction property
    facing: "E",
};

// snake.drawSnake();

let graphics = {
    canvas: document.getElementById("canvas"),
    squareSize: 30,

    drawBoard: function (ctx) {
        let currentYoffset = 0;
        game.board.forEach(function checkLine(line) {
            line = line.split('');
            let currentXoffset = 0;
            line.forEach(function checkCharacter(character) {
                if (character === '#') {
                    ctx.fillStyle = "black";
                    ctx.fillRect(currentXoffset, currentYoffset, graphics.squareSize, graphics.squareSize);
                }
                currentXoffset += graphics.squareSize;
            });
            currentYoffset += graphics.squareSize;
        });
    },

    // function to render the snake
    drawSnake: function (ctx) {
        snake.parts.forEach(function drawPart(part) {
            let partXlocation = part.x * graphics.squareSize;
            let partYlocation = part.y * graphics.squareSize;
            ctx.fillStyle = "green";
            ctx.fillRect(partXlocation, partYlocation, graphics.squareSize, graphics.squareSize);
        });
    },

    drawGame: function () {
        let ctx = graphics.canvas.getContext("2d");
        graphics.drawBoard(ctx);
        graphics.drawSnake(ctx);
    }
};

graphics.drawGame();