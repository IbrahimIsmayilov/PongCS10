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
let prevXVelocity;
let xVelocity;
let scoreLeft = 0;
let scoreRight = 0;
let frameCount = 0;
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
let yVelocity = Math.random() * 5;

function pongTwoP() {
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
  ballX += xVelocity;
  ballY += yVelocity;

  // Scoreboard
  ctx.font = "50px Comic Sans MS, Comic Sans, cursive";
  ctx.strokeStyle = "white";
  ctx.strokeText(scoreLeft, 310, 70);
  ctx.fillRect(ballX, ballY, 20, 20);
  ctx.strokeText(scoreRight, 430, 70); //I dont understand why they are equally far apart from each other. I need the relationship between the distances of the two from the middle squares explained to me.

  // Checking ball collision with the left paddle
  // Why does the scoreboard not work for the first score?
  if (ballX < 35) {
    if (ballY > paddleY1 - 20 && ballY < paddleY1 + 100) {
      xVelocity *= -1;
    } else {
      frameCount++;
      if (ballX < -20 && frameCount < calcLimit) {
        scoreRight++;
        xVelocity = 0;
        console.log(xVelocity);
      }
      if (frameCount === 50) {
        ballX = 350;
        ballY = 160;
        paddleY1 = 200;
        paddleY2 = 200;
        xVelocity = prevXVelocity;
        frameCount = 0;
      }
    }
  }

  // Checking ball collision with the right paddle
  if (ballX > 745) {
    if (ballY > paddleY2 - 20 && ballY < paddleY2 + 100) {
      xVelocity *= -1;
    } else {
      // if (canvas.width < ballX < 810) {
      //   scoreLeft++;
      //   console.log(scoreLeft);
      //   ballX = 820;
      // If I run this code, why does the scoreLeft keep increasing?
      if (ballX > canvas.width && frameCount < calcLimit) {
        scoreLeft++;
        xVelocity = 0;
      }
      frameCount++;
      if (frameCount === 50) {
        ballX = 350;
        ballY = 160;
        paddleY1 = 200;
        paddleY2 = 200;
        xVelocity = prevXVelocity;
        frameCount = 0;
      }
    }
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

  requestAnimationFrame(pongTwoP);
}
// How can the computer load code beyond this? Isn't the computer stuck in running this infinite function?

// Event Listeners
document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);
oneBtn.addEventListener("click", choseOneP);
twoBtn.addEventListener("click", choseTwoP);
easyBtn1p.addEventListener("click", easyPong1p);
mediumBtn1p.addEventListener("click", mediumPong1p);
hardBtn1p.addEventListener("click", hardPong1p);

function choseTwoP() {
  openingText.classList.add("hidden");
  easyBtn2p.classList.remove("hidden");
  mediumBtn2p.classList.remove("hidden");
  hardBtn2p.classList.remove("hidden");
}

function choseOneP() {
  openingText.classList.add("hidden");
  easyBtn1p.classList.remove("hidden");
  mediumBtn1p.classList.remove("hidden");
  hardBtn1p.classList.remove("hidden");
}

function easyPong1p() {
  // let xVelocity = 7; Why does this not work?
  oneSelection.classList.add("hidden");
  xVelocity = 6.5;
  prevXVelocity = xVelocity;
  cnv.classList.remove("hidden");
  calcLimit = 10;
  pongTwoP();
}

function mediumPong1p() {
  oneSelection.classList.add("hidden");
  xVelocity = 8;
  prevXVelocity = xVelocity;
  cnv.classList.remove("hidden");
  calcLimit = 8;
  pongTwoP();
}

function hardPong1p() {
  oneSelection.classList.add("hidden");
  xVelocity = 9.5;
  prevXVelocity = xVelocity;
  cnv.classList.remove("hidden");
  calcLimit = 7;
  pongTwoP();
}

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
