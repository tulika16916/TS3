const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gr,b1,b2,b3,b4,b5,b6,b7,b8,p,s;
var score=0;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

  gr = new Ground(600,300,140,30)
  b1 = new Box(555,270,30,30)
  b2 = new Box(585,270,30,30)
  b3 = new Box(615,270,30,30)
  b4 = new Box(645,270,30,30) 

  b5 = new Box(565,240,30,30)
  b6 = new Box(595,240,30,30)
  b7 = new Box(625,240,30,30)

  b8 = new Box(595,210,30,30)

  p = new Paper(200,200,30)

  s= new Slingshot(p.body,{x:200,y:100})

  

}


function draw() {
  background("Pink");
  
Engine.update(engine)

 gr.display();
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
p.display();
s.display();

b1.Score();
b2.Score();
b3.Score();
b4.Score();
b5.Score();
b6.Score();
b7.Score();
b8.Score();

text("SCORE:"+score,650,40)
}

function mouseDragged(){
  Matter.Body.setPosition(p.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
   s.fly();
}