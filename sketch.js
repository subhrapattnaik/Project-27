
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1050, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 roof = new Roof(400,260,200,20);
	
	 bob1 = new Bob(25,300,60);
	 bob2 = new Bob(225,300,60);
	 bob3 = new Bob(425,300,60);
	 bob4 = new Bob(625,300,60);
	 bob5 = new Bob(825,300,60);


	rope1 = new Chain( bob1.body,{x:roof.body.position.x-90,y:roof.body.position.y});
	rope2 = new Chain(bob2.body,{x:roof.body.position.x-60,y:roof.body.position.y});
	rope3 = new Chain(bob3.body,{x:roof.body.position.x+30,y:roof.body.position.y});
	 rope4 = new Chain(bob4.body,{x:roof.body.position.x+60,y:roof.body.position.y});
	rope5 = new Chain(bob5.body,{x:roof.body.position.x+90,y:roof.body.position.y});



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

	}
}

