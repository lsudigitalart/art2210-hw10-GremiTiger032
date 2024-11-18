let particles = [];


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  if(mouseIsPressed) {
    particles.push(new Particle(mouseX, mouseY));
  }

  for(let i = 0; i < particles.length; i++) {
    particles[i].display();
  }

}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speedX = random(-1, 1);
    this.speedY = random(-1, 1);
  }


  display() {
    rect(this.x, this.y, 20, 20);
    this.x += this.speedX;
    this.y += this.speedY;
  }



}