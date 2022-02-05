
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var ball;
var blower;
var stand;
function setup() {
  createCanvas(500,500);

  engine = Engine.create();
  world = engine.world;
  ball = new Ball(width / 2 + 80, height / 2 - 80, 80, 80);
  stand = new Stand(width / 2 - 55, height / 2 + 55, 150, 20)
  blower = new Blower(width / 2 + 70, height / 2 + 20, 100, 90);
  button = createButton("Click to Blow");
  button.position(width / 2, height - 100);
 

  button.mousePressed(blow);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  ball.show()
  blower.show()
  stand.show()
}
function blow() {
  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:0.05});
}