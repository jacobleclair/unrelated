let room = 0; // the current room

let playerX = 0; // x position of player
let playerY = 0; // y posiion of player

const speed = 5;   

enum Directions { up, down, left, right };
let facing = Directions.up; // direction that the player is facing

function drawMap() {
    ctx.clearRect(0, 0, 640, 480);

    ctx.drawImage(roomMappings[room], 0 - playerX, 0 - playerY); // draw background

    drawSprite(0, 3, 3, 20, 30, 320, 240, 2); // draw sprite

    // try to move the player; X
    let hitWall = false;
    let i;
    
    for (i = 0; i < speed; i++) {
        // if you've never seen this, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus
        playerX += (+directions[3] - +directions[2]);
    
        // collision detection!
        if (colMaps[room].data[((playerY + 240 + 60) * 640 + (playerX + 320     )) * 4] === 255) hitWall = true; // bottom-left of player
        if (colMaps[room].data[((playerY + 240 + 60) * 640 + (playerX + 320 + 40)) * 4] === 255) hitWall = true; // bottom-right of player
        if (hitWall) break;
    }

    // if hit wall, undo movement
    if (hitWall) {
        playerX -= (+directions[3] - +directions[2]) * (i + 1);
    }

    drawSprite(0, 3, 3, 20, 30, 320, 240, 2); // draw sprite

    // try to move the player; Y
    hitWall = false;
    
    for (i = 0; i < speed; i++) {
        // if you've never seen this, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus
        playerY += (+directions[1] - +directions[0]);
    
        // collision detection!
        if (colMaps[room].data[((playerY + 240 + 60) * 640 + (playerX + 320     )) * 4] === 255) hitWall = true; // bottom-left of player
        if (colMaps[room].data[((playerY + 240 + 60) * 640 + (playerX + 320 + 40)) * 4] === 255) hitWall = true; // bottom-right of player
        if (hitWall) break;
    }

    // if hit wall, undo movement
    if (hitWall) {
        playerY -= (+directions[1] - +directions[0]) * (i + 1);
    }
}