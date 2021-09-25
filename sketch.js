var sea_image
var sea_sprite
var ship_animation
var ship_sprite
function preload(){
sea_image = loadImage("sea.png")
ship_animation = loadAnimation("ship-1.png","ship-2.png")
}

function setup(){
  createCanvas(400,400);
  background("blue");
  sea_sprite = createSprite(200,200,400,400)
  sea_sprite.addImage("sea",sea_image)
  sea_sprite.scale = 0.3

  ship_sprite = createSprite(200,200,50,50)
  ship_sprite.addAnimation("ship",ship_animation)
  ship_sprite.scale = 0.3
  
}

function draw() {
  background(0);
  sea_sprite.velocityX = -10
  if(sea_sprite.x <=0){
    sea_sprite.x = 200
  }
  drawSprites();
}