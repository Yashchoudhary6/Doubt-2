var ball, ground, right, up;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(650, 650);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     var ball_options={
		 isStatic : false,
    	 restitution : 0.3,
		 friction : 0, 
		 density : 1.2
		}
  ball= Bodies.circle(100,100,20,ball_options);
  World.add(world, ball);

  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  up = new Ground(10,200,20,400);

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

	Engine.run(engine);
	rectMode(CENTER);
	ellipseMode(RADIUS);

}


function draw() {
  rectMode(CENTER);
  background("red");
  groundObj.display();

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
  }
}
  
  function keyPressed(){
    if(keyCode===RIGHT_ARROW){
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
      }
}
