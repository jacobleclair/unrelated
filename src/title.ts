// play this fire song 🔥🔥🔥
play(0, true);

// get the canvas
const canvas : HTMLCanvasElement = document.querySelector("#game");
const ctx = canvas.getContext("2d");

// title screen drawing
let titleShade = 0;      // how much the title screen is faded out
let titleStarted = false // if title has started to fade out

function drawTitleScreen() {
    ctx.clearRect(0, 0, 640, 480);

    ctx.imageSmoothingEnabled = false; // better pixelated drawing

    ctx.font = '16px "8bo", Consolas, sans-serif'

    ctx.fillStyle = "#fff";

    ctx.textAlign = "center";
    ctx.fillText("Press Z or Enter to start", 320, 360);

    ctx.drawImage(images.title, 160, 220, 320, 41); // UNRELATED

    if (titleShade > 1.3) { // when UNRELATD is completely faded out
        ctx.fillStyle = "#000";
        ctx.clearRect(0, 0, 640, 480); // make background blank
        
        ctx.fillStyle = "#fff";
        ctx.font = '2em "8bo", Consolas, sans-serif';
        ctx.textBaseline = "middle";
        ctx.fillText("by Jacob LeClair", 320, 240); // :)

        setTimeout(() => gameState = 1, 2000); // set gameState to 1 (map) after 2 seconds
    } else if (titleStarted) { // shade out title
        titleShade += delta / 5000;
        ctx.fillStyle = "rgba(255, 255, 255, " + titleShade + ")"; // increase alpha
        ctx.fillRect(0, 0, 640, 480);
    }
}

zHandlers.push(function() {
    titleStarted = true;      // starts fading out tht tile; see drawTitleScreen
    play(1, false);           // play the fade out
    musicElements[0].pause(); // stop title screen music
});

                                                            
                                                            
//          _____                    _____                    _____                    _____                    _____          
//          /\    \                  /\    \                  /\    \                  /\    \                  /\    \         
//          /::\    \                /::\    \                /::\    \                /::\____\                /::\    \        
//          /::::\    \              /::::\    \              /::::\    \              /:::/    /               /::::\    \       
//          /::::::\    \            /::::::\    \            /::::::\    \            /:::/    /               /::::::\    \      
//          /:::/\:::\    \          /:::/\:::\    \          /:::/\:::\    \          /:::/    /               /:::/\:::\    \     
//          /:::/  \:::\    \        /:::/__\:::\    \        /:::/__\:::\    \        /:::/    /               /:::/  \:::\    \    
//          /:::/    \:::\    \      /::::\   \:::\    \      /::::\   \:::\    \      /:::/    /               /:::/    \:::\    \   
//          /:::/    / \:::\    \    /::::::\   \:::\    \    /::::::\   \:::\    \    /:::/    /      _____    /:::/    / \:::\    \  
//          /:::/    /   \:::\ ___\  /:::/\:::\   \:::\    \  /:::/\:::\   \:::\ ___\  /:::/____/      /\    \  /:::/    /   \:::\ ___\ 
//          /:::/____/     \:::|    |/:::/__\:::\   \:::\____\/:::/__\:::\   \:::|    ||:::|    /      /::\____\/:::/____/  ___\:::|    |
//          \:::\    \     /:::|____|\:::\   \:::\   \::/    /\:::\   \:::\  /:::|____||:::|____\     /:::/    /\:::\    \ /\  /:::|____|
//          \:::\    \   /:::/    /  \:::\   \:::\   \/____/  \:::\   \:::\/:::/    /  \:::\    \   /:::/    /  \:::\    /::\ \::/    / 
//          \:::\    \ /:::/    /    \:::\   \:::\    \       \:::\   \::::::/    /    \:::\    \ /:::/    /    \:::\   \:::\ \/____/  
//          \:::\    /:::/    /      \:::\   \:::\____\       \:::\   \::::/    /      \:::\    /:::/    /      \:::\   \:::\____\    
//          \:::\  /:::/    /        \:::\   \::/    /        \:::\  /:::/    /        \:::\__/:::/    /        \:::\  /:::/    /    
//          \:::\/:::/    /          \:::\   \/____/          \:::\/:::/    /          \::::::::/    /          \:::\/:::/    /     
//          \::::::/    /            \:::\    \               \::::::/    /            \::::::/    /            \::::::/    /      
//          \::::/    /              \:::\____\               \::::/    /              \::::/    /              \::::/    /       
//          \::/____/                \::/    /                \::/____/                \::/____/                \::/____/        
//          ~~                       \/____/                  ~~                       ~~                                       
                                                                                                                    
                        
// ps: i hate debug



window.addEventListener("keydown", function(e) {
    if (e.code === "Space") gameState = 1; // enter map immediately when space is pressed
})