let gameState = 0; // 0 - title screen

function tick() {
    if (gameState == 0) {
        drawTitleScreen();
    } else if (gameState == 1) {
        drawMap();
    }
}   