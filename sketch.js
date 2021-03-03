
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var Score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  monkey_collided = loadImage("sprite_0.png");
  
  
  bananaImage   = loadImage("banana.png");
  obstaceImage  = loadImage("obstacle.png");
  FoodGroup     = createGroup();
  obstacleGroup = createGroup();
  
  
}



function setup() {
  
  
  
  createCanvas(600,400)
  
  
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  monkey.velocityX = 0.002;
 
  
  
    
  ground = createSprite(400,375,900,70);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  ground.shapeColor = "green";
 
  
}


function draw() {
background("skyBlue");
  
  text("Survival Time : "+Score,100,50)
  
  banana();
  obstacles();
  
  if(ground.x<0);
  {
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")) {
    monkey.velocityY = -12;
   }
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
  if(monkey.isTouching(obstacleGroup)){
    ground.velocityX = 0;
    Score = 0;
    FoodGroup.velocityX = 0;
    monkey.addImage(monkey_collided);
    obstacleGroup.velocityX = 0;
  }
  
  
   if(monkey.isTouching(FoodGroup)){      
    
    FoodGroup.destroyEach();
  }
  
  Score = Math.ceil(round(frameCount/frameRate()))
  
  drawSprites();
}


function banana(){
 
  if(frameCount %170 == 0){
  
var banana = createSprite(600,Math.round(random(100,200)),20,20)

  banana.velocityX=-3;
  banana.addImage(bananaImage)  ;
  banana.scale = 0.1;
  banana.lifetime = -1;
  FoodGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount % 150 ==  0){
    var obstacle = createSprite(600,325,50,50)
    obstacle.velocityX = -4;
    
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.1;
    obstacleGroup.add(obstacle);
    if(monkey.isTouching(obstacleGroup)){
      obstacle.velocityX = 0;
    }
  }
}




