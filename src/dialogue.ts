let dialogue: string;
let dialoguePosition = 0;
let dialogueSpeaker: Speaker;
let dialogueSpeakerSprite: number;
let showDialogue = false;
let dialogueStart: number; // time

const dialogueSpeed = 2; // characters per second
const dialogueDelay = 1000 / dialogueSpeed;
const wordGap = 30; // gap between each word in pixels

const spriteRegions: { [key: string]: number[][] } = {
    // list of speakers to call in speak()
    // cropped out of the image in speakerSheetMap using [x, y, w, h]
    "alphys": [
        [2, 2, 56, 47],
        [3 + (58 * 8), 2, 56, 47]
    ]
}

const speakerSheetMap = {
    "alphys": 1,
    "asgore": 2,
    "asriel": 3,
    "papyrus": 4,
    "sans": 5,
    "toriel": 6,
    "undyne": 7
}

type Speaker = keyof typeof speakerSheetMap;

function drawDialogue() {
    ctx.fillStyle   = "#000000";
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 5;

    ctx.fillRect  (10, 320, 620, 160);
    ctx.strokeRect(10, 320, 620, 160);

    const spriteRegion = spriteRegions[dialogueSpeaker][dialogueSpeakerSprite];
    const scaleX = 140 / spriteRegion[2] * spriteRegion[2] / spriteRegion[3];
    const scaleY = 140 / spriteRegion[3];
    drawSprite(speakerSheetMap[dialogueSpeaker], spriteRegion[0], spriteRegion[1], spriteRegion[2], spriteRegion[3], 20, 330, scaleX, scaleY);

    ctx.font = "20px '8bo'";
    ctx.fillStyle = "#ffffff";
    ctx.textBaseline = "top";
    ctx.textAlign = "left";
    let oldDialoguePosition = dialoguePosition;
    dialoguePosition = Math.min(Math.floor((Date.now() - dialogueStart) / dialogueDelay), dialogue.length);

    if (dialoguePosition != oldDialoguePosition) play(2, false);

    const text = dialogue.slice(0, dialoguePosition);
    const words = text.split(' ');
    let line = '';
    const lines = [];
    const maxWidth = 630 - (spriteRegion[2] * scaleX + 40);
    const lineHeight = 20;

    for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            lines.push(line.trim());
            line = words[n] + ' ';
        } else {
            line = testLine;
        }
    }
    lines.push(line.trim());

    lines.forEach((line, index) => {
        ctx.fillText(line, spriteRegion[2] * scaleX + 40, 340 + index * lineHeight);
    });
}

function speak(text: string, speaker: Speaker, sprite: number) {
    dialogue = text;
    dialoguePosition = 0;
    dialogueSpeaker = speaker;
    dialogueSpeakerSprite = sprite;
    dialogueStart = Date.now();
    showDialogue = true;
}