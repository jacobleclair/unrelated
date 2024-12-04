let room = 0;

const roomMappings : HTMLImageElement[] = [
    images.ruins
];

let playerX = 0;
let playerY = 0;

enum Directions { up, down, left, right };
let facing = Directions.up; 

function drawMap() {
    ctx.clearRect(0, 0, 640, 480);

    ctx.drawImage(roomMappings[room], 0 - playerX, 0 - playerY);

    drawSprite(0, 3, 3, 20, 30, 320, 240, 1.5);

    playerX += +directions[3] - +directions[2];
    playerY += +directions[1] - +directions[0];

    console.log();
}