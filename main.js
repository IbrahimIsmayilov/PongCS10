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
let ballMoveFrame = 0;
let yVelocity = 0;
let mouseIsPressed = false;
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
    oneBtn.classList.remove("hidden");
    twoBtn.classList.remove("hidden");
  }

  requestAnimationFrame(animateText);
}

function pongTwoP() {
  // Updating the frame count every 1/60th of a second
  frameCount++;

  if (frameCount > ballMoveFrame) {

    // Checking ball collision with the left paddle
    if (ballX < 35 && ballX + 20 > 20 && ballY + 20 > paddleY1 && ballY < paddleY1 + 100) {
      xVelocity *= -1;
      if (yVelocity === 0) {
        randNum = Math.random;
        if (randNum > 0.5) {
          while (yVelocity < 2)
            yVelocity === Math.random() * 5;
        } else {
          while (yVelocity > -2)
            yVelocity === Math.random() * -5;
        }
      }
    } else if (ballX < -20) {
      xVelocity *= -1;
      scoreLeft++;
      ballMoveFrame = frameCount + 60;

      // Checking ball collision with the right paddle
      if (ballX + 20 > 765 && ballX < 780 && ballY + 20 > paddleY2 && ballY < paddleY2 + 100) {
        xVelocity *= -1;
        if (yVelocity === 0) {
          randNum = Math.random;
          if (randNum > 0.5) {
            while (yVelocity < 2)
              yVelocity === Math.random() * 5;
          } else {
            while (yVelocity > -2)
              yVelocity === Math.random() * -5;
          }
        }
      } else if (ballX > 800) {
        xVelocity *= -1;
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
      ctx.fillRect(ballX, ballY, 20, 20);
      ballX += xVelocity;
      ballY += yVelocity;

      // Checking ball collision with the top and bottom of the screen
      if (ballY + 20 > canvas.height || ballY < 0) {
        yVelocity *= -1;
      }

    } else {
      movePaddle();
      yVelocity = 0;
      ballX = 350;
      ballY = 160;
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

  function choseTwoP() {
    hOne.classList.add("hidden");
    hTwo.classList.add("hidden");
    oneBtn.classList.add("hidden");
    twoBtn.classList.add("hidden");
    easyBtn2p.classList.remove("hidden");
    mediumBtn2p.classList.remove("hidden");
    hardBtn2p.classList.remove("hidden");
  }

  function choseOneP() {
    hOne.classList.add("hidden");
    hTwo.classList.add("hidden");
    oneBtn.classList.add("hidden");
    twoBtn.classList.add("hidden");
    easyBtn1p.classList.remove("hidden");
    mediumBtn1p.classList.remove("hidden");
    hardBtn1p.classList.remove("hidden");
  }

  function easyPong2p() {
    xVelocity = -6;
    easyBtn2p.classList.add("hidden");
    mediumBtn2p.classList.add("hidden");
    hardBtn2p.classList.add("hidden");
    cnv.classList.remove("hidden");
    pongTwoP();
  }

  function mediumPong2p() {
    xVelocity = 7;
    easyBtn2p.classList.add("hidden");
    mediumBtn2p.classList.add("hidden");
    hardBtn2p.classList.add("hidden");
    cnv.classList.remove("hidden");
    pongTwoP();
  }

  function hardPong2p() {
    xVelocity = 8;
    easyBtn2p.classList.add("hidden");
    mediumBtn2p.classList.add("hidden");
    hardBtn2p.classList.add("hidden");
    cnv.classList.remove("hidden");
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