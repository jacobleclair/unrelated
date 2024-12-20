let dialogue : String;
let dialoguePosition = 0;
let dialogueSpeaker : HTMLImageElement;
let showDialogue = false;

function drawDialogue() {
    ctx.fillStyle   = "#000000";
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 5;

    ctx.fillRect  (10, 320, 620, 160);
    ctx.strokeRect(10, 320, 620, 160);
}

function speak(text : String, speaker : HTMLImageElement) {
    dialogue = text;
    dialoguePosition = 0;
    dialogueSpeaker = speaker;
    showDialogue = true;
}