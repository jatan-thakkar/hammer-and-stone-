




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine ;
var world 
var hammer ;
var rubber ;
var stone ;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;
     ground= new Ground (600,height,1200,20)
	 stone= new Stone (700,320,100,100)
	 hammer= new Hammer (10,100)
	 rubber= new Rubber (900,450,70);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  stone.display();
  hammer.display();
  rubber.display();
  drawSprites();
 
}



