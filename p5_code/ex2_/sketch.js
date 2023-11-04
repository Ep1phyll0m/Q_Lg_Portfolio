let gSize = 100;
let horse;
let horse2;
let counterG = 0;
let counterR = 0;

function setup() {
  createCanvas(600, 600);
  background(73,51,57);
    
    frameRate(24);
  noStroke();
  // Load in 2 different images of your own and name them below
  // Images must be in the same directory as your .js file to load correctly
  horse = loadImage("images/MC-Horse1.png");
  // #435830495823045989
  horse2 = loadImage("images/MC-Horse2.jpg");

}

function draw() {
  
  ellipse (mouseX,(mouseX**2)/1000+100, 100);
  fill (87-64*mouseX/600, 159-111*mouseX/600, 242-110*mouseX/600);
    
  if (!mouseIsPressed) {
    noTint();
    image(horse, 0, 0,width/2, height/2);
    image(horse2, width/2, height/2, width/2, height/2);
  } else {
    // tint(255, 126); // Apply transparency without changing color
    let checkCounter = 0;

    for ( let i = 0; i < height; i+= gSize) {

      // add extra count to make it offset in the next row
      checkCounter++;

      for ( let j = 0; j < width; j+=(gSize) ) {

           // mod operator  %
        if ( (checkCounter % 2) == 0 ) {
          image(horse, j, i, gSize, gSize);


      } else if ( (checkCounter % 5)  == 1 ) {

          image(horse2, j, i, gSize, gSize);
      } else {
          fill(84,7,32);
          rect(j, i, gSize-3, gSize-3);
          fill (47,105,9);
          rect(j, i, gSize-3, gSize/6);
      }
          
 if ( mouseIsPressed & keyIsPressed == true )  {
    textSize((counterR/6)+2.5);
    textAlign(CENTER);
    fill(40, 0, 255);
    text("Stop horsing around 😠", width/2, counterR);
    counterR-=.75;
    if (counterR < -50) {
      counterR = height;
    }
    
  } else  {
  
  textSize((counterG/6)+10);
  textAlign(CENTER);
  fill(40, 80, 120);
      stroke(204,255,212);
  text("Horse puns, yay or neigh? 🐎", width/2, counterG);

  counterG +=1.5;
    if (counterG > width) {
      counterG = -50;
    }

  
}

        checkCounter++;
      }
    }
  }
}
