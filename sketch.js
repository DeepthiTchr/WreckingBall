const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine,myWorld;

var wreckingBall, myChain;
var ground;
var block1=[], block3=[],block2=[],block4=[],block5=[],block6=[];

function preload(){

}

function setup(){
   
    createCanvas(windowWidth, windowHeight);
   //createCanvas(displayWidth, displayHeight);

    myEngine = Engine.create();
    myWorld = myEngine.world;

    wreckingBall = new Ball(width/6,height/4,width/16);
    myChain = new Chain(wreckingBall.body, {x:width/4, y:height/6});

    ground = new Ground(width/2, height-height/4, width/5, height/10);
    console.log(ground.width)
    for(var num = 1; num <= 6; num = num+1){
       block1[num]= new Box((width/2+ground.width/2+ground.width/12) - (num* ground.width/6),height-height/4 - (2*height/25), ground.width/6, height/25 );
    }
    for(var num = 1; num <= 5; num = num+1){
        block2[num]= new Box((width/2+ground.width/2) - (num* ground.width/6),height-height/4 - (3*height/25), ground.width/6, height/25 );
     }
     for(var num = 1; num <= 4; num = num+1){
        block3[num]= new Box((width/2+ground.width/2-ground.width/12) - (num* ground.width/6),height-height/4 - (4*height/25), ground.width/6, height/25 );
     }
     for(var num = 1; num <= 3; num = num+1){
        block4[num]= new Box((width/2+ground.width/2-+ground.width/6) - (num* ground.width/6),height-height/4 - (5*height/25), ground.width/6, height/25 );
     }
     for(var num = 1; num <= 2; num = num+1){
        block5[num]= new Box((width/2+ground.width/2-ground.width/4.5) - (num* ground.width/6),height-height/4 - (6*height/25), ground.width/6, height/25 );
     }
     for(var num = 1; num <= 1; num = num+1){
        block6[num]= new Box((width/2+ground.width/2-ground.width/3.3) - (num* ground.width/6),height-height/4 - (7*height/25), ground.width/6, height/25 );
     }
}

function draw(){

    background(0,0,0);

    Engine.update(myEngine);

    wreckingBall.display();
    myChain.display();
    drawVehicle();
   
    ground.display();

    for(var num = 1; num <= 6; num = num+1){
        block1[num].display();
    }
    for(var num = 1; num <= 5; num = num+1){
        block2[num].display();
    }
    for(var num = 1; num <= 4; num = num+1){
        block3[num].display();
    }
    for(var num = 1; num <= 3; num = num+1){
        block4[num].display();
    }
    for(var num = 1; num <= 2; num = num+1){
        block5[num].display();
    }
    for(var num = 1; num <= 1; num = num+1){
        block6[num].display();
    }

}

function mouseDragged(){
    Body.setPosition(wreckingBall.body, {x:mouseX, y:mouseY});
}

function drawVehicle(){
    
   push();
   fill(0,0,128);
   noStroke();
   //body {x:width/4, y:height/6}
   rectMode(CENTER)
      //bottom 
      rect(width/10, height-height/4 - height/20, width/5, height/10);
      //top 
      rect(width/20, height-height/4 - height/10, width/10, height/10);
   //wheels
   ellipseMode(CENTER);
   ellipse(width/10 - (width/25), height-height/4 , width/25,width/25);
   ellipse(width/10 + (width/25), height-height/4 , width/25,width/25);
   //rod
   strokeWeight(13);
   stroke(0,0,128);
   line(width/10, height- height/4- height/20, width/4, height/6);
   pop();
   
}
