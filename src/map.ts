let room = 0; // the current room

const roomMappings : HTMLImageElement[] = [ // maps room to background; index of image in this array corresponds to the room id
    images.ruins
];

let playerX = 0; // x position of player
let playerY = 0; // y posiion of player

enum Directions { up, down, left, right };
let facing = Directions.up; // direction that the player is facing

function drawMap() {
    ctx.clearRect(0, 0, 640, 480);

    ctx.drawImage(roomMappings[room], 0 - playerX, 0 - playerY); // draw background

    drawSprite(0, 3, 3, 20, 30, 320, 240, 1.5); // draw sprite

    // if you've never seen this, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus
    playerX += +directions[3] - +directions[2];
    playerY += +directions[1] - +directions[0];
}