
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var player, pcImg;
var backImg;


function preload()
{
	pcImg=loadImage("images/Superhero-02.png");
	backImg=loadImage("images/GamingBackground.png");
}

function setup() {
	createCanvas(1200, 700);

	player=createSprite(400,200,50,50);
	player.addImage("superhero",pcImg);
	player.scale=0.15;



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backImg);

  if(keyDown(LEFT_ARROW)){
	  player.x=player.x-10;
  }

  if(keyDown(RIGHT_ARROW)){
	  player.x=player.x+10;
  }
  
  if(keyDown(UP_ARROW)){
	player.y=player.y-10;
}

if(keyDown(DOWN_ARROW)){
	player.y=player.y+10;
}

  drawSprites();
 
}



