const startTime = Date.now();
let lastTime = startTime;
let delta : number;

function timing() {
    const now = Date.now();
    delta = now - lastTime;
    lastTime = now;

    tick();

    requestAnimationFrame(timing);
}

requestAnimationFrame(timing);