const startTime = Date.now(); // time that the game was started
let lastTime = startTime;     // the last time that a frame happened
let delta : number;           // time since last frame

function timing() {
    const now = Date.now();
    delta = now - lastTime;
    lastTime = now;

    tick(); // see tick.ts

    requestAnimationFrame(timing);
}

requestAnimationFrame(timing);