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
});