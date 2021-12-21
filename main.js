// Pong by Ibrahim Ismayilov

// Setting up canvas
let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;


// Global Variables
let wIsPressed = false;
let aIsPressed = false;
let dIsPressed = false; 
let sIsPressed = false; 
let arrowUp = false;
let arrowDown = false;
let arrowRight = false; 
let arrowLeft = false; 
let paddleY = 190;
    let paddleY2 = 190;

requestAnimationFrame(pong)
function pong() {

    // Draw the black background
    ctx.fillStyle = "black";
    ctx.fillRect(0,0, cnv.width, cnv.height);
    
    // Draw the white line in the middle
    ctx.fillStyle = "white";
    let squareY = 2;
    for  (n = 1; n <= 15; n++) {
        ctx.fillRect(380, squareY, 20, 20);
        squareY += 41;
    }

    
    


    if (wIsPressed) {
        paddleY++;
    }

    ctx.fillRect(20, paddleY, 15, 110); 
    ctx.fillRect(765, paddleY2, 15, 110); 

    
    
    
    

    requestAnimationFrame(pong);
} // How can the computer load code beyond this? Isn't the computer stuck in running this infinite function?

document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
    if (event.code = "keyW") {
        !(wIsPressed);
    }
    
}