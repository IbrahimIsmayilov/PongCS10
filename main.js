// Pong by Ibrahim Ismayilov

// Setting up canvas
let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables


requestAnimationFrame(pong)

function pong() {
    // Update Variables

    // Draw the black background
    ctx.fillStyle = "black";
    ctx.fillRect(0,0, cnv.width, cnv.height);
    
    // Draw the white line in the middle
    ctx.fillStyle = "white";
    
    let squareY = 0;
    for  (n = 1; n <= 15; n++) {
        ctx.fillRect(380, squareY, 20, 20);
        squareY += 41;
    }
    requestAnimationFrame(pong);
}