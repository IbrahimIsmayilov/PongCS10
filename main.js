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
let ball = {
  x: 350,
  y: 160,
}
let multiMode = false;
let singleMode = false;
let scoreLeft = 0;
let scoreRight = 0;
let frameCount = 0;
let ballMoveFrame = 0;
let yVelocity = 0;
let twoBtn = document.getElementById("twoBtn");
let oneBtn = document.getElementById("oneBtn");
let easyBtn1p = document.getElementById("easyBtn1p");
let mediumBtn1p = document.getElementById("mediumBtn1p");
let hardBtn1p = document.getElementById("hardBtn1p");
let easyBtn2p = document.getElementById("easyBtn2p");
let mediumBtn2p = document.getElementById("mediumBtn2p");
let hardBtn2p = document.getElementById("hardBtn2p");
let frameCountTwo = 0;
let hOne = document.getElementById("hOne");
let hTwo = document.getElementById("hTwo");
let randNum;
let menuClick = document.getElementById("menuClick");
let returnBtnEl = document.getElementById("returnBtn");
let onePmodes = document.getElementById("1Pmodes");
let twoPmodes = document.getElementById("2Pmodes");
let firstBtns = document.getElementById("firstBtns");

function returnValues() {
  let multiMode = false;
  let singleMode = false;
  let scoreLeft = 0;
  let scoreRight = 0;
  let frameCount = 0;
  let ballMoveFrame = 0;
  let yVelocity = 0;
}

requestAnimationFrame(animateText);

function animateText() {
  frameCountTwo++;

  if (frameCountTwo > 4) {
    hTwo.innerHTML = "W";
  }

  if (frameCountTwo > 8) {
    hTwo.innerHTML += "e";
  }

  if (frameCountTwo > 16) {
    hTwo.innerHTML += "l";
  }

  if (frameCountTwo > 20) {
    hTwo.innerHTML += "c";
  }

  if (frameCountTwo > 24) {
    hTwo.innerHTML += "o";
  }

  if (frameCountTwo > 28) {
    hTwo.innerHTML += "m";
  }

  if (frameCountTwo > 32) {
    hTwo.innerHTML += "e";
  }

  if (frameCountTwo > 36) {
    hTwo.innerHTML += " T";
  }

  if (frameCountTwo > 40) {
    hTwo.innerHTML += "o";
  }

  if (frameCountTwo > 44) {
    hOne.innerHTML = "P";
  }

  if (frameCountTwo > 48) {
    hOne.innerHTML += "O";
  }

  if (frameCountTwo > 52) {
    hOne.innerHTML += "N";
  }

  if (frameCountTwo > 56) {
    hOne.innerHTML += "G";
  }

  if (frameCountTwo > 60) {
    hOne.innerHTML += "!";
  }

  if (frameCountTwo === 64) {
    firstBtns.classList.remove("hidden");
  }

  requestAnimationFrame(animateText);
}

function pongTwoP() {
  // Updating the frame count every 1/60th of a second
  frameCount++;

  if (frameCount > ballMoveFrame) {

    // Checking ball collision with the left paddle
    if (ball.x < 35 && ball.x + 20 > 20 && ball.y + 20 > paddleY1 && ball.y < paddleY1 + 100) {
      if (ball.x < 35) {
        yVelocity *= -1;
        if (ball.x < 27.5) {
          xVelocity *= -1;
        }
      }
      xVelocity *= -1;
      if (yVelocity === 0) {
        randNum = Math.random();
        if (randNum < 0.5) {
          while (yVelocity <= 2) {
            yVelocity = Math.random() * 5;
          }
        } else {
          while (yVelocity >= -2) {
            yVelocity = Math.random() * -5;
          }
        }
      }
    } else if (ball.x < -20) {
      scoreLeft++;
      ballMoveFrame = frameCount + 60;
    }

    // Checking ball collision with the right paddle
    if (ball.x + 20 > 765 && ball.x < 780 && ball.y + 20 > paddleY2 && ball.y < paddleY2 + 100) {
      if (ball.x > 765) {
        yVelocity *= -1;
        if (ball.x > 770) {
          xVelocity *= -1;
        }
      }
      xVelocity *= -1;
      if (yVelocity === 0) {
        randNum = Math.random();
        if (randNum < 0.5) {
          while (yVelocity <= 2) {
            yVelocity = Math.random() * 5;
          }
        } else {
          while (yVelocity >= -2) {
            yVelocity = Math.random() * -5;
          }
        }
      }
    } else if (ball.x > 800) {
      scoreRight++;
      ballMoveFrame = frameCount + 60;
    }

    // Reverting the paddles back to their original positions after the ball has reappeared on the screen
    if (frameCount === ballMoveFrame + 1) {
      paddleY1 = 200;
      paddleY2 = 200;
    }

    movePaddle();

    // Drawing the ball
    ctx.fillRect(ball.x, ball.y, 20, 20);
    ball.x += xVelocity;
    ball.y += yVelocity;

    // Checking ball collision with the top and bottom of the screen
    if (ball.y + 20 > canvas.height || ball.y < 0) {
      yVelocity *= -1;
    }
    
  } else {
    movePaddle();
    yVelocity = 0;
    ball.x = 350;
    ball.y = 160;
    if (frameCount === ballMoveFrame - 1)
      xVelocity *= -1;
  }
  

  requestAnimationFrame(pongTwoP);
}

// How can the computer load code beyond this? Isn't the computer stuck in running this infinite function?


function movePaddle() {
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

  // Scoreboard
  ctx.font = "50px Comic Sans MS, Comic Sans, cursive";
  ctx.strokeStyle = "white";
  ctx.strokeText(scoreLeft, 310, 70);
  ctx.strokeText(scoreRight, 430, 70);

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


// Event Listeners
document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);
oneBtn.addEventListener("click", choseOneP);
twoBtn.addEventListener("click", choseTwoP);
easyBtn2p.addEventListener("click", easyPong2p);
mediumBtn2p.addEventListener("click", mediumPong2p);
hardBtn2p.addEventListener("click", hardPong2p);
returnBtnEl.addEventListener("click", returnBtn);

function returnBtn() {
  menuClick.currentTime = 0;
  menuClick.play();
  if (onePmodes.classList !== "hidden" || twoPmodes.classList !== "hidden") {
    twoPmodes.classList.add("hidden");
    onePmodes.classList.add("hidden");
    firstBtns.classList.remove("hidden");
    returnBtnEl.classList.add("hidden");
  }
  if (cnv.classList !== "hidden" && multiMode) {
    multiMode = false;
    returnBtnEl.classList.remove("hidden");
    cnv.classList.add("hidden");
    firstBtns.classList.add("hidden");
    twoPmodes.classList.remove("hidden");
  }
}


function choseTwoP() {
  menuClick.currentTime = 0;
  menuClick.play();
  hOne.classList.add("hidden");
  hTwo.classList.add("hidden");
  firstBtns.classList.add("hidden");
  twoPmodes.classList.remove("hidden");
  returnBtnEl.classList.remove("hidden");
}

function choseOneP() {
  menuClick.currentTime = 0;
  menuClick.play();
  hOne.classList.add("hidden");
  hTwo.classList.add("hidden");
  firstBtns.classList.add("hidden");
  onePmodes.classList.remove("hidden");
  returnBtnEl.classList.remove("hidden");
}

function easyPong2p() {
  multiMode = true;
  menuClick.currentTime = 0;
  menuClick.play();
  xVelocity = -6;
  twoPmodes.classList.add("hidden");
  returnBtnEl.classList.add("hidden");
  cnv.classList.remove("hidden");
  pongTwoP();
  console.log(xVelocity);
}

function mediumPong2p() {
  multiMode = true;
  menuClick.currentTime = 0;
  menuClick.play();
  xVelocity = 7;
  twoPmodes.classList.add("hidden");
  cnv.classList.remove("hidden");
  pongTwoP();
  console.log(xVelocity);
}

function hardPong2p() {
  multiMode = true;
  menuClick.currentTime = 0;
  menuClick.play();
  xVelocity = 8;
  twoPmodes.classList.add("hidden");
  cnv.classList.remove("hidden");
  pongTwoP();
  console.log(xVelocity);
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