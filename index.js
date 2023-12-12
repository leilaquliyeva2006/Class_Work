const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 800;



const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT


ctx.fillStyle = 'green';
ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
