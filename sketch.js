
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bob1
var bob2
var bob3
var bob4
var bob5
var roof1
var rope1
var rope2
var h
var l 
var g
var k
var f 
var rope3
var rope4
var rope5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	roof1=new roof(350,100,300,30)

	bob1=new bob(250,350)
	bob2=new bob(300,350)
	bob3=new bob(350,350)
	bob4=new bob(400,350)
	bob5=new bob(450,350)

	
 // World.add(world,k)

  rope1=new rope(bob1.body,roof1.body,-100,0)
   rope2=new rope(bob2.body,roof1.body,-50,0)
   rope3=new rope(bob3.body,roof1.body,0,0)
   rope4=new rope(bob4.body,roof1.body,50,0)
   rope5=new rope(bob5.body,roof1.body,100,0)
 
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
 
  roof1.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-700,y:0});
	
	 }
   }



