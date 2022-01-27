// Pong by Ibrahim Ismayilov
// Comments:
// Try to fix the pong glitch still present in thursday's class
// Paddle collision sounds 
// Button transitions
// Ask teacher to explain the strange relationship in the returnBtn function between the if statements "intertwining" when pressed during a pong game
// AI for singleplayer
// Light or Dark mode?
// Info section
// Score cap


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
  y: 240,
}
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
let singleMultiMode = document.getElementById("singleMultiMode");
let multiPlay = false;
let singlePlay = false;
let textNotWritten = true;
let frameCountThree = 0;
let stageOne = 0;
let stageTwo = 0;
let stageThree = 0;
let stageFour = 0;
let easyAI = false;
let mediumAI = false;
let hardAI = false;
let repeat = 1;
let ballMoveFrameTwo = 0;


requestAnimationFrame(animateText);

function animateText() {
  frameCountTwo++;

  if (frameCountTwo > 3) {
    hTwo.innerHTML = "W";
  }

  if (frameCountTwo > 6) {
    hTwo.innerHTML += "e";
  }

  if (frameCountTwo > 9) {
    hTwo.innerHTML += "l";
  }

  if (frameCountTwo > 12) {
    hTwo.innerHTML += "c";
  }

  if (frameCountTwo > 15) {
    hTwo.innerHTML += "o";
  }

  if (frameCountTwo > 18) {
    hTwo.innerHTML += "m";
  }

  if (frameCountTwo > 21) {
    hTwo.innerHTML += "e";
  }

  if (frameCountTwo > 24) {
    hTwo.innerHTML += " T";
  }

  if (frameCountTwo > 27) {
    hTwo.innerHTML += "o";
  }

  if (frameCountTwo > 30) {
    hOne.innerHTML = "P";
  }

  if (frameCountTwo > 33) {
    hOne.innerHTML += "O";
  }

  if (frameCountTwo > 36) {
    hOne.innerHTML += "N";
  }

  if (frameCountTwo > 39) {
    hOne.innerHTML += "G";
  }

  if (frameCountTwo > 42) {
    hOne.innerHTML += "!";
  }

  if (frameCountTwo === 45) {
    singleMultiMode.classList.remove("hidden");
    textNotWritten = false;
  }

  if (textNotWritten) {
    requestAnimationFrame(animateText);
  }
}

function pongOneP() {
  // Updating the frame count every 1/60th of a second
  frameCountThree++;

  if (frameCountThree > ballMoveFrameTwo) {

    // Checking ball collision with the left paddle
    if (ball.x < 35 && ball.x + 20 > 20 && ball.y + 20 > paddleY1 && ball.y < paddleY1 + 100) {
      // Checking where the ball collides on the paddle
      xVelocity *= -1;
      ball.x = 35;
      if (ball.y < paddleY1 && paddleY1 > ball.y + 10) {
        if (ball.x + 20 < 27.5) {
          xVelocity *= -1;
        }
        ball.y = paddleY1 - 20;
        if (yVelocity === 0) {
          while (yVelocity > -2) {
            yVelocity = Math.random() * -5;
          }
        } else {
          if (2 < yVelocity < 5) {
            yVelocity *= -1;
          }
        }
      } else if (ball.y + 20 > paddleY1 + 100 && paddleY1 + 100 < ball.y + 10) {
        if (ball.x + 20 < 27.5) {
          xVelocity *= -1;
        }
        ball.y = paddleY1 + 100;
        if (yVelocity === 0) {
          while (yVelocity < 2) {
            yVelocity = Math.random() * 5;
          }
        } else {
          if (-2 > yVelocity > -5) {
            yVelocity *= -1;
          }
        }
      } else {
        randNum = Math.random();
        if (yVelocity === 0) {
          if (randNum < 0.5) {
            while (yVelocity > -2) {
              yVelocity = Math.random() * -5;
            }
          } else {
            while (yVelocity < 2) {
              yVelocity = Math.random() * 5;
            }
          }
        }
      }
    } else if (ball.x < -20) {
      scoreLeft++;
      ballMoveFrameTwo = frameCountThree + 60;
    }

    // Checking ball collision with the right paddle
    if (ball.x + 20 > 765 && ball.x < 780 && ball.y + 20 > paddleY2 && ball.y < paddleY2 + 100) {
      // Checking where the ball collides on the paddle
      ball.x = 745;
      xVelocity *= -1;
      if (ball.y < paddleY2 && paddleY2 > ball.y + 10) {
        if (ball.x > 772.5) {
          xVelocity *= -1;
        }
        ball.y = paddleY2 - 20;
        if (yVelocity === 0) {
          while (yVelocity > -2) {
            yVelocity = Math.random() * -5;
          }
        } else {
          if (2 < yVelocity < 5) {
            yVelocity *= -1;
          }
        }
      } else if (ball.y + 20 > paddleY2 + 100 && paddleY2 + 100 < ball.y + 10) {
        if (ball.x > 772.5) {
          xVelocity *= -1;
        }
        ball.y = paddleY2 + 100;
        if (yVelocity === 0) {
          while (yVelocity < 2) {
            yVelocity = Math.random() * 5;
          }
        } else {
          if (-2 > yVelocity > -5) {
            yVelocity *= -1;
          }
        }
      } else {
        randNum = Math.random();
        if (yVelocity === 0) {
          if (randNum < 0.5) {
            while (yVelocity > -2) {
              yVelocity = Math.random() * -5;
            }
          } else {
            while (yVelocity < 2) {
              yVelocity = Math.random() * 5;
            }
          }
        }
      }
    } else if (ball.x > 800) {
      scoreRight++;
      ballMoveFrameTwo = frameCountThree + 60;
    }

    // Checking which AI mode to activate
    if (easyAI) {
      easyAIMode();
    }

    if (mediumAI) {
      mediumAIMode();
    }

    if (hardAI) {
      hardAIMode();
    }

    // Reverting the paddles back to their original positions after the ball has reappeared on the screen
    if (frameCountThree === ballMoveFrameTwo + 1) {
      paddleY1 = 200;
      paddleY2 = 200;
    }

    // The function to keep track of the scoreboard, move the paddles and so forth. Made into a function because it will be reused later in the program. 
    movePaddleOneP();

    // Drawing the ball
    ctx.fillRect(ball.x, ball.y, 20, 20);
    ball.x += xVelocity;
    ball.y += yVelocity;

    // Checking ball collision with the top and bottom of the screen
    if (ball.y + 20 > canvas.height || ball.y < 0) {
      yVelocity *= -1;
    }

  } else {
    movePaddleOneP(); // Specificially made into a function so that the player is able to move the paddles for a second even after the ball is off-screen. Makes the whole game feel more natural. 
    yVelocity = 0;
    ball.x = 350;
    ball.y = 240;
    resetVariables();
    if (frameCountThree === ballMoveFrameTwo - 1) // This is the last time this function is run before the if statement above in which if (frameCount > ballMoveFrameTwo) equals true. Thus, this change in xVelocity is only going to run once and it is programmed to start the game with the ball heading towards the player who scored similar to how a soccer game starts after a goal is scored.  
      xVelocity *= -1;
  }
  if (singlePlay) {
    requestAnimationFrame(pongOneP);
  } else {
    yVelocity = 0;
    ball.x = 350;
    ball.y = 240;
    paddleY1 = 200;
    paddleY2 = 200;
  }
}


function pongTwoP() {
  // Updating the frame count every 1/60th of a second
  frameCount++;

  if (frameCount > ballMoveFrame) {

    // Checking ball collision with the left paddle
    if (ball.x < 35 && ball.x + 20 > 20 && ball.y + 20 > paddleY1 && ball.y < paddleY1 + 100) {
      // Checking where the ball collides on the paddle
      xVelocity *= -1;
      ball.x = 35;
      if (ball.y < paddleY1 && paddleY1 > ball.y + 10) {
        ball.y = paddleY1 - 20;
        if (yVelocity === 0) {
          while (yVelocity > -2) {
            yVelocity = Math.random() * -5;
          }
        } else {
          if (2 < yVelocity < 5) {
            yVelocity *= -1;
          }
        }
      } else if (ball.y + 20 > paddleY1 + 100 && paddleY1 + 100 < ball.y + 10) {
        ball.y = paddleY1 + 100;
        if (yVelocity === 0) {
          while (yVelocity < 2) {
            yVelocity = Math.random() * 5;
          }
        } else {
          if (-2 > yVelocity > -5) {
            yVelocity *= -1;
          }
        }
      } else {
        randNum = Math.random();
        if (yVelocity === 0) {
          if (randNum < 0.5) {
            while (yVelocity > -2) {
              yVelocity = Math.random() * -5;
            }
          } else {
            while (yVelocity < 2) {
              yVelocity = Math.random() * 5;
            }
          }
        }
      }
    } else if (ball.x < -20) {
      scoreLeft++;
      ballMoveFrame = frameCount + 60;
    }

    // Checking ball collision with the right paddle
    if (ball.x + 20 > 765 && ball.x < 780 && ball.y + 20 > paddleY2 && ball.y < paddleY2 + 100) {
      // Checking where the ball collides on the paddle
      ball.x = 745;
      xVelocity *= -1;
      if (ball.y < paddleY2 && paddleY2 > ball.y + 10) {
        ball.y = paddleY2 - 20;
        if (yVelocity === 0) {
          while (yVelocity > -2) {
            yVelocity = Math.random() * -5;
          }
        } else {
          if (2 < yVelocity < 5) {
            yVelocity *= -1;
          }
        }
      } else if (ball.y + 20 > paddleY2 + 100 && paddleY2 + 100 < ball.y + 10) {
        ball.y = paddleY2 + 100;
        if (yVelocity === 0) {
          while (yVelocity < 2) {
            yVelocity = Math.random() * 5;
          }
        } else {
          if (-2 > yVelocity > -5) {
            yVelocity *= -1;
          }
        }
      } else {
        randNum = Math.random();
        if (yVelocity === 0) {
          if (randNum < 0.5) {
            while (yVelocity > -2) {
              yVelocity = Math.random() * -5;
            }
          } else {
            while (yVelocity < 2) {
              yVelocity = Math.random() * 5;
            }
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

    // The function to keep track of the scoreboard, move the paddles and so forth. Made into a function because it will be reused later in the program. 
    movePaddleTwoP();

    // Drawing the ball
    ctx.fillRect(ball.x, ball.y, 20, 20);
    ball.x += xVelocity;
    ball.y += yVelocity;

    // Checking ball collision with the top and bottom of the screen
    if (ball.y + 20 > canvas.height || ball.y < 0) {
      yVelocity *= -1;
    }

  } else {
    movePaddleTwoP(); // Specificially made into a function so that the player is able to move the paddles for a second even after the ball is off-screen. Makes the whole game feel more natural. 
    yVelocity = 0;
    ball.x = 350;
    ball.y = 240;
    if (frameCount === ballMoveFrame - 1) // This is the last time this function is run before the if statement above in which if (frameCount > ballMoveFrame) equals true. Thus, this change in xVelocity is only going to run once and it is programmed to start the game with the ball heading towards the player who scored similar to how a soccer game starts after a goal is scored.  
      xVelocity *= -1;
  }
  if (multiPlay) {
    requestAnimationFrame(pongTwoP);
  } else {
    yVelocity = 0;
    ball.x = 350;
    ball.y = 240;
    paddleY1 = 200;
    paddleY2 = 200;
  }
}

function movePaddleTwoP() {
  // Drawing the background
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Drawing the line in the middle
  ctx.fillStyle = "white";
  let squareY = 15;
  for (n = 1; n <= 30; n++) {
    ctx.fillRect(390, squareY, 10, 10);
    squareY += 35;
  }

  // Scoreboard
  ctx.font = "50px Comic Sans MS, Comic Sans, cursive";
  ctx.strokeStyle = "white";
  ctx.strokeText(scoreLeft, 310, 70);
  ctx.strokeText(scoreRight, 430, 70);

  // The S key to move the paddle down
  if (sIsPressed && paddleY1 < 500) {
    paddleY1 += 6.15;
  }

  // The W key to move the paddle up
  if (wIsPressed && paddleY1 > 0) {
    paddleY1 -= 6.15;
  }

  // The arrow up to move the paddle up
  if (arrowDIsPressed && paddleY2 < 500) {
    paddleY2 += 6.15;
  }

  // The arrow down to move the paddle down
  if (arrowUIsPressed && paddleY2 > 0) {
    paddleY2 -= 6.15;
  }

  // Drawing the paddles
  ctx.fillRect(20, paddleY1, 15, 100);
  ctx.fillRect(765, paddleY2, 15, 100);
}

function movePaddleOneP() {
  // Drawing the background
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Drawing the line in the middle
  ctx.fillStyle = "white";
  let squareY = 15;
  for (n = 1; n <= 30; n++) {
    ctx.fillRect(390, squareY, 10, 10);
    squareY += 35;
  }

  // Scoreboard
  ctx.font = "50px Comic Sans MS, Comic Sans, cursive";
  ctx.strokeStyle = "white";
  ctx.strokeText(scoreLeft, 310, 70);
  ctx.strokeText(scoreRight, 430, 70);

  // The S key to move the paddle down
  if (sIsPressed && paddleY1 < 500) {
    paddleY1 += 6.15;
  }

  // The W key to move the paddle up
  if (wIsPressed && paddleY1 > 0) {
    paddleY1 -= 6.15;
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
easyBtn1p.addEventListener("click", easyPong1p);
mediumBtn1p.addEventListener("click", mediumPong1p);
hardBtn1p.addEventListener("click", hardPong1p);

// What the return button does
function returnBtn() {
  menuClick.currentTime = 0;
  menuClick.play();
  if (onePmodes.classList !== "hidden" || twoPmodes.classList !== "hidden") {
    twoPmodes.classList.add("hidden");
    onePmodes.classList.add("hidden");
    singleMultiMode.classList.remove("hidden");
    returnBtnEl.classList.add("hidden");
  }

  if (multiPlay) {
    multiPlay = false;
    cnv.classList.add("hidden");
    returnBtnEl.classList.remove("hidden");
    singleMultiMode.classList.add("hidden");
    twoPmodes.classList.remove("hidden");
  }

  if (singlePlay) {
    singlePlay = false;
    returnBtnEl.classList.remove("hidden");
    cnv.classList.add("hidden");
    singleMultiMode.classList.add("hidden");
    onePmodes.classList.remove("hidden");
  }
}

function resetVariables() {
  stageOne = 0;
  stageTwo = 0;
  stageThree = 0;
  stageFour = 0;
  repeat = 0;
}

function easyAIMode() {
  while (400 > stageOne && stageOne > 500) {
    stageOne = Math.random() * 800;
  }
  while (500 > stageTwo && stageTwo > 600) {
    stageTwo = Math.random() * 800;
  }

  while (600 > stageTwo && stageTwo > 700) {
    stageThree = Math.random() * 800;
  }

  while (700 > stageTwo && stageTwo > 750) {
    stageFour = Math.random() * 800;
  }

  if (repeat < 2) {
    repeat++;
    randNum = Math.random();
  }

  if (randNum < 0.25) {
    if (yVelocity !== 0) {
      if (ball.x > stageOne && paddleY2 > 0) {
        if (ball.y < 300) {
          paddleY2 -= 5;
        } else if (ball.y > 300 && paddleY2 < 500) {
          paddleY2 += 5;
        }
      }
    }
  } else if (randNum < 0.5) {
    if (yVelocity !== 0) {
      if (ball.x > stageTwo) {
        if (ball.y < 300 && paddleY2 > 0) {
          paddleY2 -= 5;
        } else if (ball.y > 300 && paddleY2 < 500) {
          paddleY2 += 5;
        }
      }
    }
  } else if (randNum < 0.75) {
    if (yVelocity !== 0) {
      if (ball.x > stageThree) {
        if (ball.y < 300 && paddleY2 > 0) {
          paddleY2 -= 5;
        } else if (ball.y > 300 && paddleY2 < 500)  {
          paddleY2 += 5;
        }
      }
    } 
  } else {
    if (ball.x > stageFour && paddleY2 > 0) {
      if (yVelocity !== 0) {
        if (ball.y < 300) {
          paddleY2 -= 5;
        } else if (ball.y > 300 && paddleY2 < 500) {
          paddleY2 += 5;
        }
      }
    }
  }
}

// If the player chooses multiplayer
function choseTwoP() {
  menuClick.currentTime = 0;
  menuClick.play();
  hOne.classList.add("hidden");
  hTwo.classList.add("hidden");
  singleMultiMode.classList.add("hidden");
  twoPmodes.classList.remove("hidden");
  returnBtnEl.classList.remove("hidden");
}

// If the player chooses singleplayer
function choseOneP() {
  menuClick.currentTime = 0;
  menuClick.play();
  hOne.classList.add("hidden");
  hTwo.classList.add("hidden");
  singleMultiMode.classList.add("hidden");
  onePmodes.classList.remove("hidden");
  returnBtnEl.classList.remove("hidden");
}

// Easy level pong in multiplayer mode
function easyPong2p() {
  menuClick.currentTime = 0;
  menuClick.play();
  xVelocity = 2;
  twoPmodes.classList.add("hidden");
  cnv.classList.remove("hidden");
  multiPlay = true;
  pongTwoP();
}

// Medium level pong in multiplayer mode
function mediumPong2p() {
  menuClick.currentTime = 0;
  menuClick.play();
  xVelocity = 8.5;
  twoPmodes.classList.add("hidden");
  cnv.classList.remove("hidden");
  multiPlay = true;
  pongTwoP();
}

// Hard level pong in multiplayer mode
function hardPong2p() {
  menuClick.currentTime = 0;
  menuClick.play();
  xVelocity = 9;
  twoPmodes.classList.add("hidden");
  cnv.classList.remove("hidden");
  multiPlay = true;
  pongTwoP();
}

// Easy level pong in singleplayer mode
function easyPong1p() {
  menuClick.currentTime = 0;
  menuClick.play();
  xVelocity = 8;
  onePmodes.classList.add("hidden");
  cnv.classList.remove("hidden");
  singlePlay = true;
  easyAI = true;
  mediumAI = false;
  hardAI = false;
  pongOneP();
}

function mediumPong1p() {
  menuClick.currentTime = 0;
  menuClick.play();
  xVelocity = 8.5;
  onePmodes.classList.add("hidden");
  cnv.classList.remove("hidden");
  singlePlay = true;
  mediumAI = true;
  hardAI = false;
  pongOneP();
}

function hardPong1p() {
  menuClick.currentTime = 0;
  menuClick.play();
  xVelocity = 9;
  onePmodes.classList.add("hidden");
  cnv.classList.remove("hidden");
  singlePlay = true;
  hardAI = true;
  easyAI = false;
  mediumAI = false;
  pongOneP();
}

// Checking which keys are pressed
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

// Checking which keys are released
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