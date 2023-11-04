let systems;
let cola;
let tbh;
let star;
let x;
let y;

let counter = 0;

function preload() {

  cola = loadImage("assets/Coca_Cola.jpg");
  tbh = loadImage("assets/TbhCreature.jpg");
}

function setup() {
  createCanvas(710, 400);
  systems = [];
}

function draw() {
 // background(51);
  background(0);
  frameRate(0.5);

  // function star(x, y, radius1, radius2, npoints) {
  //   let angle = TWO_PI / npoints;
  //   let halfAngle = angle / 2.0;
  //   beginShape();
  //   for (let a = 0; a < TWO_PI; a += angle) {
  //     let sx = x + cos(a) * radius2;
  //     let sy = y + sin(a) * radius2;
  //     vertex(sx, sy);
  //     sx = x + cos(a + halfAngle) * radius1;
  //     sy = y + sin(a + halfAngle) * radius1;
  //     vertex(sx, sy);
  //   }

  for (i = 0; i < systems.length; i++) {
    systems[i].run();
    systems[i].addParticle();
  }
  if (systems.length == 0) {
   // push();
    //translate(x,y);
   // rotate(random(5));
    fill(228, 232, 167);
    textAlign(CENTER);
    textSize(45);
    text("Click to Yippeee!", width / 2, height / 2);
    //pop();
  }
}

function mousePressed() {

  this.p = new ParticleSystem(createVector(mouseX, mouseY));
  systems.push(p);
}

// A simple Particle class
let Particle = function(position) {
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 255.0;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function () {
  stroke(200, this.lifespan);
  strokeWeight(2);
  fill(127, this.lifespan);
    img = loadImage('assets/Coca_Cola.jpg');
    img = loadImage( 'assets/TbhCreature.jpg');
  
  // function setup() {
  //   background(50);
  //   // Top-left corner of the img is at (10, 10)
  //   // Width and height are 50×50
  //image(img, this.position.x, this.position.y, 50, 50);

 // ellipse(this.position.x, this.position.y, 12, 12);
};

// Is the particle still useful?
Particle.prototype.isDead = function () {
  if (this.lifespan < 0) {
    return true;
  } else {
    return false;
  }
};

let ParticleSystem = function (position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function () {
  // Add either a Particle or CrazyParticle to the system
  if (int(random(0, 2)) == 0) {
    p = new Particle(this.origin);
  }
  else {
    p = new CrazyParticle(this.origin);
  }
  this.particles.push(p);
};

ParticleSystem.prototype.run = function () {
  for (let i = this.particles.length - 1; i >= 0; i--) {
    let p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};

// A subclass of Particle

function CrazyParticle(origin) {
  // Call the parent constructor, making sure (using Function#call)
  // that "this" is set correctly during the call
  Particle.call(this, origin);

  // Initialize our added properties
  this.theta = 0.0;
};

// Create a Crazy.prototype object that inherits from Particle.prototype.
// Note: A common error here is to use "new Particle()" to create the
// Crazy.prototype. That's incorrect for several reasons, not least
// that we don't have anything to give Particle for the "origin"
// argument. The correct place to call Particle is above, where we call
// it from Crazy.
CrazyParticle.prototype = Object.create(Particle.prototype); // See note below

// Set the "constructor" property to refer to CrazyParticle
CrazyParticle.prototype.constructor = CrazyParticle;

// Notice we don't have the method run() here; it is inherited from Particle

// This update() method overrides the parent class update() method
CrazyParticle.prototype.update=function() {
  Particle.prototype.update.call(this);
  // Increment rotation based on horizontal velocity
  this.theta += (this.velocity.x * this.velocity.mag()) / 10.0;
}

// This display() method overrides the parent class display() method
CrazyParticle.prototype.display=function() {
  // Render the ellipse just like in a regular particle
  Particle.prototype.display.call(this);
  // Then add a rotating line
  push(); {
  translate(this.position.x, this.position.y);
  rotate(this.theta);
  stroke(255, this.lifespan);
  image(cola, this.position.x, this.position.y, 50, 50);
  //image(cola * this.xspacing, height / 2 + this.yvalues[x], 60,60);
  image(tbh, this.position.x+25, this.position.y+25,45, 45);
  line(0, 0, 25, 0);

  

  // let img; {
  // img = loadImage('assets/pizza.jpg');
}
// function setup() {
//   background(50);
//   // Top-left corner of the img is at (10, 10)
//   // Width and height are 50×50
image(cola, 10, 10, 10, 10);
image(tbh, 20,20,30,30);
  pop();

  function keyPressed() {

    if (keyIsPressed === true) {
        let k = key;
        console.log("k is " + k);

        if (k == 's' || k == 'S') {
            console.log("Stopped Recording");
            recMode = false;
            noLoop();
        }

        if (k == ' ') {
            console.log("Start Recording");
            recMode = true;
            loop();
        }
    }
}

function recordit() {  // new version
    if (recMode == true) {
        let ext = nf(frameCount, 4);
        saveCanvas(can, 'frame-' + ext, 'jpg');
        console.log("rec " + ext);
    }
}

}