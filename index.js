const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 800;

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.fillStyle = "red";

ctx.beginPath();

ctx.arc(
   100,
   100,
   100,
   0.2 * Math.PI,
   1.8 * Math.PI
   );
ctx.lineTo(100, 100);
ctx.closePath();
ctx.fill();
ctx.stroke();
