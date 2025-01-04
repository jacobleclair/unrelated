// audio
const musicElements : HTMLAudioElement[] = [];

for (let audio of [ // this array holds the names of the audio to be added to musicElements. `./audio/${name}.mp3`
    "002",  // title
    "intro", // fade sound effect on title screen
    "debug/vine", // ;)
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
    musicElements[id].currentTime = 0;
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
    "frisk",
    "alphys_dialogue",
    "asgore_dialogue",
    "asriel_dialogue",
    "papyrus_dialogue",
    "sans_dialogue",
    "toriel_dialogue",
    "undyne_dialogue"
]) {
    const img = document.createElement("img");
    img.src = "spritesheet/" + sheet + ".png";
    spritesheets.push(img);
}

// room mappings
const roomMappings : HTMLImageElement[] = [ // maps room to background; index of image in this array corresponds to the room id
    images.ruins
];

// rooms; specifically, collision boxes
const colMaps : ImageData[] = [];

const colMapCanvas = document.createElement("canvas");
const colMapCanvasCtx = colMapCanvas.getContext("2d"); 
colMapCanvas.width = 640;
colMapCanvas.height = 480;

for (let img of roomMappings) {
    const bmpImg = document.createElement("img");
    bmpImg.src = img.src.slice(0, -4) + ".bmp";

    bmpImg.addEventListener("load", function() {
        colMapCanvasCtx.drawImage(bmpImg, 0, 0);

        colMaps.push(colMapCanvasCtx.getImageData(0, 0, 640, 480));

        bmpImg.remove();
    });
}

function drawSprite(sheet: number, boxX: number, boxY: number, boxW: number, boxH: number, destX : number, destY : number, scaleX : number, scaleY: number) {
    // draws a sprite to the screen.
    // sheet: which sheet to use; the index of the spritesheet in the spritesheets array
    // boxX:  cuts image out of spritesheet; x coordinate
    // boxY:  cuts image out of spritesheet; y coordinate
    // boxW:  cuts image out of spritesheet; width
    // boxH:  cuts image out of spritesheet; height
    // destX: x position to draw image at
    // destY: y position to draw image at
    // scaleX: multiplied by the original image size; increases the width of the image
    // scaleY: multiplied by the original image size; increases the height of the image
    ctx.drawImage(spritesheets[sheet], boxX, boxY, boxW, boxH, destX, destY, scaleX * boxW, scaleY * boxH);
}