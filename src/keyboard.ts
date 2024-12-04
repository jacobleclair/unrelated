const zHandlers : Function[] = [];
const xHandlers : Function[] = [];
const cHandlers : Function[] = [];

const directions : Boolean[] = [false, false, false, false]; // up, down, left, right

window.addEventListener("keydown", function(e) {
    if (e.code === "KeyZ" || e.code == "Enter") {
        for (let func of zHandlers) func();
    } else if (e.code === "KeyX" || e.code === "ShiftLeft" || e.code === "ShiftRight") {
        for (let func of xHandlers) func();
    } else if (e.code === "KeyC") {
        for (let func of cHandlers) func();
    }

    else if (e.code == "ArrowUp" || e.code == "KeyW") {
        directions[0] = true;
    } else if (e.code == "ArrowDown" || e.code == "KeyS") {
        directions[1] = true;
    } else if (e.code == "ArrowLeft" || e.code == "KeyA") {
        directions[2] = true;
    } else if (e.code == "ArrowRight" || e.code == "KeyD") {
        directions[3] = true;
    }
});

window.addEventListener("keyup", function(e) {
    if (e.code == "ArrowUp" || e.code == "KeyW") {
        directions[0] = false;
    } else if (e.code == "ArrowDown" || e.code == "KeyS") {
        directions[1] = false;
    } else if (e.code == "ArrowLeft" || e.code == "KeyA") {
        directions[2] = false;
    } else if (e.code == "ArrowRight" || e.code == "KeyD") {
        directions[3] = false;
    }
});