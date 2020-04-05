const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var boxA, ground;
var boxes = [];




function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(100, 400, 800, 1);
 
 
}

function mousePressed(){
  boxA = new Box(mouseX, mouseY, random(20,80), random(20,80));
  boxes.push(boxA);
}

function draw(){
  background(0);

 
  Engine.update(engine);
  for(var i = 0; i < boxes.length; i++){
    boxes[i].display();
  }
  ground.display();
}