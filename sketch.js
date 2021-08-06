
function preload(){
  //pre-load images
  jaxon_running = loadAnimation("Runner-1.png","Runner-2.png");
  pathImage = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(175,200,400,20);
  path.addImage(pathImage);
  path.x = 200;
  path.velocityY = 4;
  path.scale=1.2;
  jaxon = createSprite(200,325,50,50);
  jaxon.addAnimation("running",jaxon_running);
  jaxon.scale=0.07;
  boundary1=createSprite(10,200,20,400);
  boundary1.visible=false;
  boundary2=createSprite(390,200,20,400);
  boundary2.visible=false;
}

function draw() {
  background(0);


 jaxon.x=World.mouseX;
 jaxon.collide(boundary1);
 jaxon.collide(boundary2);
  if (path.y>400){
    path.y = 200;
  }


  drawSprites();
}
