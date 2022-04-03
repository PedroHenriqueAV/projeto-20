
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var plane_option={
		isStatic: true
	}
	var block1_options={
		restitution: 0.95,
		frictionAir:0.01
	}
	var block2_options={
		restitution: 0.20,
		frictionAir:0.001
	}
	var block3_options={
		restitution: 1,
		frictionAir:0.01
	}
	plane = Bodies.rectangle(400, 690, 800, 20, plane_option);
	World.add(world,plane);

	block1 = Bodies.circle(110,10,10,block1_options);
	World.add(world,block1);

	block2 = Bodies.rectangle(400,50,10,10,block2_options);
	World.add(world,block2);

	block3 = Bodies.rectangle(690,50,10,10,block3_options);
	World.add(world,block3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  Engine.update(engine);
  drawSprites();
  ellipse(block1.position.x,block1.position.y,30);
  rect(block2.position.x,block2.position.y,100,40);
  rect(block3.position.x,block3.position.y,40,40);
}



