
var ground,paper1
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=Bodies.rectangle(800,670,width,20,{isStatic:true})
	World.add(world,ground)
	//ground.shapeColor="white"
	dustbin1=new Dustbin(700,665,50,10)
	//dustbin1.shapeColor="blue"
	dustbin2=new Dustbin(675,660,10,50)
	//dustbin2.shapeColor="blue"
	dustbin3=new Dustbin(725,660,10,50)
	//dustbin3.shapeColor="blue"
	paper1=new Paper(200,450,40)
	//paper1.shapeColor="purple"

	paperbasketpart1 = new Dustbin(800, 650-15, 10, 100, {isStatic:true})
	//Matter.Body.setAngle(paperbasketpart1, angle)
	  paperbasketpart2 = new Dustbin(900, 697.5-50, 220, 10)  
	paperbasketpart3 = new Dustbin(1000, 650-15, 10, 100)

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  //dustbin1.display;
  //dustbin2.display;
  //dustbin3.display;
  paperbasketpart1.display()
  paperbasketpart2.display()
  paperbasketpart3.display()
  paper1.display()
  
 
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:285,y:-285})
	}
}



