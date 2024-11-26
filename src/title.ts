// play this fire song 🔥🔥🔥
play(0, true);

// get the canvas
const canvas : HTMLCanvasElement = document.querySelector("#game");
const ctx = canvas.getContext("2d");

// title screen drawing
let titleShade = 0;
let titleStarted = false

function drawTitleScreen() {
    ctx.clearRect(0, 0, 640, 480);

    ctx.imageSmoothingEnabled = false;

    ctx.font = '16px "8bo"'

    ctx.fillStyle = "#fff";

    ctx.textAlign = "center";
    ctx.fillText("Press Z or Enter to start", 320, 360);

    ctx.drawImage(images.title, 160, 220, 320, 41);

    if (titleShade > 1.3) {
        ctx.fillStyle = "#000";
        ctx.clearRect(0, 0, 640, 480);
        
        ctx.fillStyle = "#fff";
        ctx.font = '2em "8bo"';
        ctx.textBaseline = "middle";
        ctx.fillText("by Jacob LeClair", 320, 240);

        setTimeout(() => gameState = 1, 2000);
    } else if (titleStarted) {
        titleShade += delta / 5000;
        ctx.fillStyle = "rgba(255, 255, 255, " + titleShade + ")";
        ctx.fillRect(0, 0, 640, 480);
    }
}

zHandlers.push(function() {
    titleStarted = true;
    play(1, false);
    musicElements[0].pause();
});