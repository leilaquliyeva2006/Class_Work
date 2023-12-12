const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 800;

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

ctx.lineWidth = 10;

//Fill edges
ctx.strokeRect(75, 140, 150, 110);

// Fill inside
ctx.fillRect(130, 190, 40, 60);

//Drow triangle
ctx.beginPath();
ctx.moveTo(50, 140);
ctx.lineTo(150, 60);
ctx.lineTo(250, 140);
ctx.closePath()


ctx.stroke();
