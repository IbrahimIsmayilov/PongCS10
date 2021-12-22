// Pong by Ibrahim Ismayilov

// Setting up canvas
let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;


// Global Variables
let wIsPressed = false;
let sIsPressed = false;
let arrowUIsPressed = false;
let arrowDIsPressed = false;
let paddleY1 = 200;
let paddleY2 = 200;
let ballX = 350;
let ballY = 160;

requestAnimationFrame(pong)
function pong() {

    // Drawing the background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    // Drawing the line in the middle
    ctx.fillStyle = "white";
    let squareY = 2;
    for (n = 1; n <= 15; n++) {
        ctx.fillRect(380, squareY, 20, 20);
        squareY += 41;
    }

    // Drawing the ball
    let randNum = Math.random();
    ctx.fillRect(ballX, ballY, 20, 20);
    ballY += randNum;
    ballX += 3
    // The S key to move the paddle down 
    if (sIsPressed && paddleY1 < 500) {
        paddleY1 += 5.75;
    }

    // The W key to move the paddle up 
    if (wIsPressed && paddleY1 > 0) {
        paddleY1 -= 5.75;
    }

    // The arrow up to move the paddle up 
    if (arrowDIsPressed && paddleY2 < 500) {
        paddleY2 += 5.75;
    }

    // The arrow down to move the paddle down 
    if (arrowUIsPressed && paddleY2 > 0) {
        paddleY2 -= 5.75;
    }

    // Drawing the paddles
    ctx.fillRect(20, paddleY1, 15, 100);
    ctx.fillRect(765, paddleY2, 15, 100);

    requestAnimationFrame(pong);
} // How can the computer load code beyond this? Isn't the computer stuck in running this infinite function?


// Event Listeners
document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);



function keydownHandler(event) {
    // Checking if S or W key is pressed
    if (event.code === "KeyS") {
        sIsPressed = true;
    } else if (event.code === "KeyW") {
        wIsPressed = true;
    }

    // Checking if the up or down arrow is pressed
    if (event.code === "ArrowUp") {
        arrowUIsPressed = true;
    } else if (event.code === "ArrowDown") {
        arrowDIsPressed = true;
    }
}

function keyupHandler(event) {
    // Checking if S or W key is released
    if (event.code === "KeyS") {
        sIsPressed = false;
    } else if (event.code === "KeyW") {
        wIsPressed = false;
    }

    // Checking if up or down arrow is released
    if (event.code === "ArrowUp") {
        arrowUIsPressed = false;
    } else if (event.code === "ArrowDown") {
        arrowDIsPressed = false;
    }
}

