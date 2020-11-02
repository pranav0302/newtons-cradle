
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(200,400,30);
	bob2 = new Bob(260,400,30);
	bob3 = new Bob(320,400,30);
	bob4 = new Bob(380,400,30);
	bob5 = new Bob(440,400,30);
	
	string1 = new StringThread(bob1.Body,{x:200,y:300});

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  string1.display();
 
}



