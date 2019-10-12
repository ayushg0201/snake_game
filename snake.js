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
        y : Math.floor(Math.random()*12+1) * grid, 
    }
