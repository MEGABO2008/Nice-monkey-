var monkey , monkey_running;
var banana ,bananaImage, bananasGroup, obstacle, obstacleImage;
var FoodGroup, obstaclesGroup;
var score;
var ground;
var score;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(700,600);  
//Monkey
monkey = createSprite(100,550,10,10);  
monkey.addAnimation("running",monkey_running);  
monkey.scale = 0.25;
//Ground
ground = createSprite(1,580,20000,15);  
//Create obstacle Group
obstaclesGroup = createGroup();
//Invisible Ground
iGround = createSprite(300,605,100000,15);  
// banana group
bananasGroup = createGroup();  
  
  score = 0;

}


function draw() {
background("white");
    text("Score: "+ score, 500,50);


if(bananasGroup.isTouching(monkey)){
   score = score + 1;
   bananasGroup.destroyEach();
   }
     
     
     
//Monkey jumping     
if(keyDown("space")&& monkey.y >= 400) {
    monkey.velocityY = -12;
}
//add gravity
monkey.velocityY = monkey.velocityY + 0.8

if(obstaclesGroup.isTouching(monkey)){
    bananasGroup.setVelocityXEach(0);
    obstaclesGroup.setVelocityXEach(0); 
   obstaclesGroup.setLifetimeEach(-1);
   bananasGroup.setLifetimeEach(-1);
  monkey.velocityY = 0;

}
     
   
   
  
  
  
monkey.collide(ground);

  
//spawn obstacles on the ground
spawnObstacles();
spawnBanana();  
  
drawSprites();  
}


function spawnObstacles(){
 if (frameCount % 90 === 0){
   var obstacle = createSprite(600,570,10,40);
   obstacle.velocityX = -(6);
   obstacle.addImage(obstacleImage); 
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.20;
    obstacle.lifetime = 100;
   obstacle.collide(iGround);
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
}

function spawnBanana(){
if(frameCount % 80 === 0){
  var banana = createSprite(600,250,10,10);
  banana.addImage(bananaImage);
  banana.scale = 0.25;
  banana.velocityX = -(7);
    bananasGroup.add(banana);
   banana.lifetime = (600/7);
}
}

