var canvas=document.getElementById("snake");
var ctx=canvas.getContext("2d");
const grid = 32;
var g = document.getElementById("img");

const beerImg = new Image();
beerImg.src="food.png";


let snake = [];

snake[0]={
	x: 9*grid,
	y: 10*grid
};
let beer = {
        x : Math.floor(Math.random()*17+1) * grid,
        y : Math.floor(Math.random()*15+1) * grid, 
    }

let d;
document.addEventListener("keydown",(e)=>){
     let k  = e.keyCode;
     if(k == 37 && d!= "right"){
	d="left"
     }else if(k == 38 && d!= "down"){
	d="up"
     }else if(k== 39 && d!= "left"){
	d="right"
     }else if(k==40 && d!= "up"){
	d="down"
     }
     console.log(d);
})

function draw(){    
    for(let i = 0; i < snake.length ; i++){
	ctx.fillStyle = ( i == 0 )? "red" : "black";
        ctx.fillRect(snake[i].x,snake[i].y,grid,grid);
        ctx.strokeStyle = "white";
        ctx.strokeRect(snake[i].x,snake[i].y,grid,grid);
    }
	
ctx.drawImage(beerImg,beer.x,beer.y);
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
     if(d=="left") snakeX -= grid;
     if(d=="up") snakeY -= grid;
     if(d=="right") snakeX += grid;
     if(d=="down") snakeY += grid;
