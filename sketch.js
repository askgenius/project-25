
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground,dustbin;
function preload() {

}

function setup() {
	createCanvas(1600, 700);
	
	engine = Engine.create();
	world = engine.world;

	paper =new Paper(200,460,135);
	ground = new Ground(800, 670, 1600, 20);
	dustbin = new Dustbin(1200,540);
	Engine.run(engine);
}


function draw() {
	background("white")
	rectMode(CENTER);
	keyPressed()
	//ground.display();
	dustbin.display();
	paper.display();
	ground.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW ){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-50});
	}
}
