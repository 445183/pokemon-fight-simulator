var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var first,second,third;
var pokeNum;
var title;
var player1Health,player2Health;

var form, player, game;
var background;
var cars,player1,player2;
var arceus,mew,darkrai,greyninja,charizard,infernape;

var track,arceusImg,mewImg,darkraiImg,greyninjaImg,charizardImg,infernapeImg;
var arceusImg2,darkraiImg2,greyninjaImg2,charizardImg2,infernapeImg2;
var poke1,poke2,poke3,poke4,poke5,poke6;
var h1,h2,h3,h4,h5,h6,h7,h8,h9,h10,h11,h12,h13,h14,h15,h16,h17,h18,h19,h20;
var player1Attack,player2Attack;
var battleSound,winnerImg,winner;
var invisibleGnd;

function preload(){
  pokemonImg=loadImage("pokemon.webp");
  arceusImg=loadImage("arceus.png");
  arceusImg2=loadImage("arceus2.png");
  mewImg=loadImage("mew.webp");
  darkraiImg=loadImage("darkrai.png");
  darkraiImg2=loadImage("darkrai2.png");
  greyninjaImg=loadImage("Greninja.png");
  greyninjaImg2=loadImage("Greninja2.png");
  charizardImg=loadImage("Charizard.png");
  charizardImg2=loadImage("Charizard2.png");
  infernapeImg=loadImage("infernape.png");
  infernapeImg2=loadImage("infernape2.png");
  backgroundImage=loadImage("background.png");

  battleSound=loadSound("battle.mp3");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  invisibleGnd=createSprite(width/2,550,width,10);
  invisibleGnd.visible=false;

  poke1=new Arceus();
  poke2=new Mew();
  poke3=new Darkrai();
  poke4=new Greyninja();
  poke5=new Charizard();
  poke6=new Infernape();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
