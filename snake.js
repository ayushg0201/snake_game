var canvas=document.getElementById("snake");
var ctx=canvas.getContext("2d");
const grid = 32;
var g = document.getElementById("img");

const beerImg = new Image();
beerImg.src="food.png";


let snake = [];

snake[0]={
	x: 13*grid,
	y: 17*grid
};
