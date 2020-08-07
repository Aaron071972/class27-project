
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){
	
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Box = createSprite(400, 100, 600, 40)
	Box.shapeColor="black"
    ground = new Ground(600,height,1200,20);

	ball1 = new Ball(150, 300, 10, 10)
	sling1 = new Slingshot(ball1.body, {x:150, y:115})

	ball2 = new Ball(230, 300, 10, 10)
	sling2 = new Slingshot(ball2.body, {x:230, y:115})

	ball3 = new Ball(310, 300, 10, 10)
	sling3 = new Slingshot(ball3.body, {x:310, y:115})

	ball4 = new Ball(390, 300, 10, 10)
	sling4 = new Slingshot(ball4.body, {x:390, y:115})

	ball5 = new Ball(470, 300, 10, 10)
	sling5 = new Slingshot(ball5.body, {x:470, y:115})

	ball6 = new Ball(550, 300, 10, 10)
	sling6 = new Slingshot(ball6.body, {x:550, y:115})

	ball7 = new Ball(620, 300, 10, 10)
	sling7 = new Slingshot(ball7.body, {x:620, y:115})

	ball8 = new Ball(690, 300, 10, 10)
	sling8 = new Slingshot(ball8.body, {x:690, y:115})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  ball1.display()
ground.display()
sling1.display()

ball2.display()
sling2.display()
ball3.display()
sling3.display()
ball4.display()
sling4.display()
ball5.display()
sling5.display()
ball6.display()
sling6.display()
ball7.display()
sling7.display()
  
ball8.display()
sling8.display()

  

  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(ball8.body, {x:mouseX, y:mouseY})
	//Matter.Body.setPosition(ball2.body, {x:mouseX, y:mouseY})
	
	}



