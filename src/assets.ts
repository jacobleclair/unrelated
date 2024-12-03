// audio
const musicElements : HTMLAudioElement[] = [];

for (let audio of [
    "002",  // title
    "intro"
]) {
    const element = document.createElement("audio");
    element.src = "audio/" + audio + ".mp3";
    musicElements.push(element);
}

function play(id : number, loop : boolean) {
    musicElements[id].loop = loop;
    musicElements[id].play();
}

// images
const images : {[key: string] : HTMLImageElement} = {};

for (let img of [
    "title"
]) {
    const element = document.createElement("img");
    element.src = "img/" + img + ".png";
    images[img] = element;
}

// spritesheets
const spritesheets : HTMLImageElement[] = [];

for (let sheet of [
    "frisk"
]) {
    const img = document.createElement("img");
    img.src = "spritesheet/" + sheet + ".png";
    spritesheets.push(img);
}

// worst code formatting humanly possible.
function drawSprite(           sheet: number, boxX: number, boxY: number, boxW: number, boxH: number, destX : number, destY : number) {
    ctx.drawImage(spritesheets[sheet],        boxX,         boxY,         boxW,         boxH,         destX,          destY,            boxW, boxH);
}