var canvas;
var totalHeight;
let rings = [];
let animationOn=true;

function setup() {
  totalHeight = document.documentElement.scrollHeight;
  canvas = createCanvas(windowWidth, totalHeight);
  canvas.position(0,0);
  canvas.style('z-index', -200);
  frameRate(20);
}

function mouseMoved(){
  if (animationOn) {
    rings.push (new Ring(mouseX, mouseY)); 
  }
}
function mouseDragged(){
  if (animationOn) {
    rings.push (new Ring(mouseX, mouseY)); 
  }
}
function windowResized(){ 
  totalHeight = document.documentElement.scrollHeight;
  resizeCanvas(windowWidth,totalHeight)
}

function draw() {
  background(17, 17, 17);

  for (let i = 0; i < rings.length; i++) {
    rings[i].display();
    rings[i].grow();
    rings[i].fade()
    if (rings.length>20){
      rings.shift();
    }
  }
}

class Ring {
  constructor(mx,my) {
    this.x = mx;
    this.y = my;
    this.diameter = 0;
    this.alpha=255;
  }

  display() {
    noFill();
    strokeWeight(0.5);
    stroke(70,70,70, this.alpha);
    circle(this.x, this.y, this.diameter);
  }

  grow() {
    this.diameter += random(1.5,2);
  }
  
  fade() {
    this.alpha -=random(1,3)
}
}
