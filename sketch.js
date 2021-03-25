var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];
var divisionHeight=300;
var score =0,particle,count=0,gameState="play";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text(mouseX+","+mouseY,mouseX,mouseY);
  text("Score : "+score,20,30);
  text("500",25,520);
  text("500",105,520);
  text("500",185,520);
  text("500",265,520);
  text("100",345,520);
  text("100",420,520);
  text("100",500,520);
  text("200",585,520);
  text("200",665,520);
  text("200",745,520);
  text("Drop the balls one by one with precision for maximum points!!",150,30)
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
  
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(particle!=null)  {
     particle.display();
   if(particle.body.position.y>500)  {
     if(particle.body.position.x<325)  {
       score+=500;
       particle=null;
     }
     else if(particle.body.position.x>326&&particle.body.position.x<565)  {
       score+=100;
       particle=null;
     }
     else  {
       score+=200;
       particle=null;
     }
  }
} 
if(count==5)  {
  gameState="end";
}
if(gameState=="end")  {
  textSize(30);
  
  text("Game Over",320,230);
  text("Press R to restart",280,335);
}
}

function mouseReleased()  {
  if(gameState=="play"&&count<=5)   {
    particle=new Particle(mouseX,10,10);
    particles.push(particle);
    count++;
  }
}

function keyPressed()  {
  if(keyCode==82)  {
    gameState="play";
    score=0;
    count=0; 
  }
}