let room = 0;

let playerX = 0;
let playerY = 0;

enum Directions { up, down, left, right };
let facing = Directions.up; 

function drawMap() {
    ctx.clearRect(0, 0, 640, 480);

    drawSprite(0, 3, 3, 20, 40, 100, 100);
}