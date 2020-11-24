var canvas, backgroundImg; 
var gameState = 0;
var playerCount, form, player, game;
var database;

function setup(){
    canvas = createCanvas(500,500);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    console.log(playerCount)
}


  