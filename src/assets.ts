// audio
const musicElements : HTMLAudioElement[] = [];

for (let audio of [ // this array holds the names of the audio to be added to musicElements. `./audio/${name}.mp3`
    "002",  // title
    "intro" // fade sound effect on title screen
]) {
    const element = document.createElement("audio");
    element.src = "audio/" + audio + ".mp3";
    musicElements.push(element);
}

function play(id : number, loop : boolean) {
    // plays audio.
    // id:   index of the audio name in the musicElements array.
    // loop: indicate if the audio should replay (true) or stop after the first iteration (false).            
    musicElements[id].loop = loop;
    musicElements[id].play();
}

// images
const images : {[key: string] : HTMLImageElement} = {};

for (let img of [ // this array holds the names of the images to be used. `./img/${name}.png`
    "title",
    "ruins"
]) {
    const element = document.createElement("img");
    element.src = "img/" + img + ".png";
    images[img] = element;
}

// spritesheets
const spritesheets : HTMLImageElement[] = [];

for (let sheet of [ // this array holds the names of the spritesheets used. `./spritesheet/${name}.png`
    "frisk"
]) {
    const img = document.createElement("img");
    img.src = "spritesheet/" + sheet + ".png";
    spritesheets.push(img);
}

// worst code formatting humanly possible.
function drawSprite(sheet: number, boxX: number, boxY: number, boxW: number, boxH: number, destX : number, destY : number, scale : number) {
    // draws a sprite to the screen.
    // sheet: which sheet to use; the index of the spritesheet in the spritesheets array
    // boxX:  cuts image out of spritesheet; x coordinate
    // boxY:  cuts image out of spritesheet; y coordinate
    // boxW:  cuts image out of spritesheet; width
    // boxH:  cuts image out of spritesheet; height
    // destX: x position to draw image at
    // destY: y position to draw image at
    // scale: multiplied by the original image size; increases the size of the image
    ctx.drawImage(spritesheets[sheet], boxX, boxY, boxW, boxH, destX, destY, scale * boxW, scale * boxH);
}