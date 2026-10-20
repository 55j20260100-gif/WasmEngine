const canvas = document.createElement("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
document.body.appendChild(canvas);

const titlestate = await import("states/TitleState.js");
const start = new mod.TitleState();
