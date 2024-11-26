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