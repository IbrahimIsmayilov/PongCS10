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
let scoreLeft = 0;
let scoreRight = 0;
let frameCount = 0;
let ballMoveFrame = 60;
let yVelocity = 2;
let mouseIsPressed = false;
let twoBtn = document.getElementById("twoBtn");
let oneBtn = document.getElementById("oneBtn");
let easyBtn1p = document.getElementById("easyBtn1p");
let mediumBtn1p = document.getElementById("mediumBtn1p");
let hardBtn1p = document.getElementById("hardBtn1p");
let easyBtn2p = document.getElementById("easyBtn2p");
let mediumBtn2p = document.getElementById("mediumBtn2p");
let hardBtn2p = document.getElementById("hardBtn2p");
let openingText = document.getElementById("openingText");
let oneSelection = document.getElementById("oneSelection");
let twoSelection = document.getElementById("twoSelection");

function pongTwoP() {
  // Updating the frame count every 1/60th of a second
  frameCount++;
  if (frameCount > ballMoveFrame) {
    // Drawing the background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    // Drawing the line in the middle
    ctx.fillStyle = "white";
    let squareY = 15;
    for (n = 1; n <= 30; n++) {
      ctx.fillRect(380, squareY, 10, 10);
      squareY += 35;
    }

    // Drawing the ball
    ctx.fillRect(ballX, ballY, 20, 20);
    ballX += xVelocity;
    ballY += yVelocity;

    // Scoreboard
    ctx.font = "50px Comic Sans MS, Comic Sans, cursive";
    ctx.strokeStyle = "white";
    ctx.strokeText(scoreLeft, 310, 70);
    ctx.strokeText(scoreRight, 430, 70); //I dont understand why they are equally far apart from each other. I need the relationship between the distances of the two from the middle squares explained to me.

    // Checking ball collision with the right paddle
    if (ballX < 35 && ballX + 20 > 20 && ballY + 20 > paddleY1 && ballY < paddleY1 + 100) {
      xVelocity *= -1;
    } else if (ballX <= -25) {
      scoreLeft++;
      ballMoveFrame = frameCount + 60;
      ballX = 350;
      ballY = 160;
    }

    // Checking ball collision with the left paddle
    if (ballX > 765 && ballX + 20 > 20 && ballY + 20 > paddleY2 && ballY < paddleY2 + 100) {
      xVelocity *= -1;
    

    }

    // Checking ball collision with the top and bottom of the screen
    if (ballY + 20 > canvas.height || ballY < 0) {
      yVelocity *= -1;
    }

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
  }
  requestAnimationFrame(pongTwoP);
}
// How can the computer load code beyond this? Isn't the computer stuck in running this infinite function?


// Event Listeners
document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);
oneBtn.addEventListener("click", choseOneP);
twoBtn.addEventListener("click", choseTwoP);
easyBtn2p.addEventListener("click", easyPong2p);
mediumBtn2p.addEventListener("click", mediumPong2p);
hardBtn2p.addEventListener("click", hardPong2p);

function choseTwoP() {
  openingText.classList.add("hidden");
  twoSelection.classList.remove("hidden");
}

function choseOneP() {
  openingText.classList.add("hidden");
  oneSelection.classList.remove("hidden");
}

function easyPong2p() {
  xVelocity = -6;
  twoSelection.classList.add("hidden");
  cnv.classList.remove("hidden");
  pongTwoP();
}

function mediumPong2p() {
  xVelocity = 7;
  twoSelection.classList.add("hidden");
  cnv.classList.remove("hidden");
  pongTwoP();
}

function hardPong2p() {
  xVelocity = 8;
  twoSelection.classList.add("hidden");
  cnv.classList.remove("hidden");
  pongTwoP();
}

function keydownHandler(event) {
  console.log(event.code);
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

function mousedownHandler(event) {
  mouseIsPressed = true;
  if (mouseIsPressed){
   // Update mouseX and mouseY
   let cnvRect = cnv.getBoundingClientRect()
   mouseX = event.x - cnvRect.x;
   mouseY = event.y - cnvRect.y;
  }
}
