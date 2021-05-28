


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  hr = hour();mn = minute();sc = second();

  scAngle = (sc,0,60,0,360);
  stroke(225,0,0);
  strokeWeight(7);
  line(0,0,100,0)
  
  background(255,255,255);  
  drawSprites();
}
