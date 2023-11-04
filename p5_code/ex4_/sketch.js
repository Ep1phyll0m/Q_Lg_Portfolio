let speedXlist = [0.0, 0.0];
let speedYlist = [0.0, 0.0];
let loXlist = [0.0, 0.0];
let loYlist = [0.0, 0.0];
let counter = 0;

function setup() {

    background(0);
    createCanvas(500, 500);

    loXlist[0] = width/2;
    loYlist[0] = height/2;
    loXlist[1] = width/2;
    loYlist[1] = height/2;
    loXlist[2] = width/2;
    loYlist[2] = height/2;

    speedXlist[0] = random(-5,5);
    speedXlist[1] = random(-5,5);
    speedXlist[2] = random(-5,5);
    speedXlist[3] = random(-5,5);


    speedYlist[0] = random(-5,5);
    speedYlist[1] = random(-5,5);
    speedYlist[2] = random(-5,5);
    speedYlist[3] = random(-5,5);


    // speedYlist[0] = random(-5,5);
    // speedYlist[1] = random(-5,5);
    // speedYlist[2] = random(-5,5);

}

function draw() {
    background(0);
    // First one (item 0)
    //push();
    if ((loXlist[0]< 0)||(loXlist[0] > width)) {
    speedXlist[0] = -speedXlist[0];
    }
    if ((loYlist[0]< 0) || (loYlist[0] > height)) {
        speedYlist[0] = -speedYlist[0];
    }
    // Second one (item 1)
    if ((loXlist[1]< 0)||(loXlist[1] > width)) {
    speedXlist[1] = -speedXlist[1];
    }
    if ((loYlist[1]< 0) || (loYlist[1] > height)) {
    speedYlist[1] = -speedYlist[1];
    }

    if ((loXlist[2]< 0)||(loXlist[2] > width)) {
      speedXlist[2] = -speedXlist[2];
      }
    if ((loYlist[2]< 0) || (loYlist[2] > height)) {
      speedYlist[2] = -speedYlist[2];
      }

    if ((loXlist[3]< 0)||(loXlist[3] > width)) {
        speedXlist[2] = -speedXlist[2];
        }
        if ((loYlist[3]< 0) || (loYlist[3] > height)) {
        speedYlist[2] = -speedYlist[2];
        }
          // update the position of the ball and print to screen

    loXlist[0] += speedXlist[0];
    loYlist[0] += speedYlist[0];
    fill(255);
    arc(loXlist[0], loYlist[0], 80, 80, 0, HALF_PI);

    loXlist[1] += speedXlist[1];
    loYlist[1] += speedYlist[1];
    fill(190);
    ellipse(loXlist[1], loYlist[1], 28, 28);

    loXlist[2] += speedXlist[2];
    loYlist[2] += speedYlist[2];
    fill(168);
    //triangle(loXlist[2]+0, loYlist[2]+0, 20, 75, 94, 15, 55);
    triangle(loXlist[2]+50, loYlist[2]+60, loXlist[2]+20, loYlist[2]+75, loXlist[2]+15, loYlist[2]+55);

    loXlist[3] += speedXlist[3];
    loYlist[3] += speedYlist[3];
    creature1(loXlist[3]+20, loYlist[3]+4, loXlist[3]-10, loYlist[3]+8, loXlist[3]-5, loYlist[3]+90);
//pop();

function creature1(k,lx,ly) {
    //console.log("toon1");
  
   push();
   translate(lox,loy);
   rotate(random(10,20));
  
    body(k);
    head(k);
    //arm(k,10,-55);
    legB(k,75,10); // right arm
    legF(k,25,50); // bot left arm
    legF(k,60,50); // bot right arm
    //noStroke();
    legB(k,-10,30); // left arm
    // tail();
    pop();
  
  }
  
  function body(k){
   //console.log("body");
    fill(k);
  
  
    //rotate(45);
    rect(0,0,120,80, 75,150,300,300);
  
  }
  
  function head(c){
  //console.log("head");
  fill(c);
  //rotate(45);
  ellipse(25,-10,110,100,);
  //fill(255);
  //ellipse(20,-20,10,10,);
  fill(20);    
      ellipse(45,-15, 30,30); // eyess
  //fill(20);
      ellipse(-5,-15, 30,30);
      line(2,9, 35,9);
  fill(200);
      ellipse(-11,-20,10);
      ellipse(38,-19,10);
  
  
  }
  
  function legF(c,lx,ly){
  //console.log("arms");
  fill(c);
  //noStroke();
  //rotate(45);
  //rect(lx,ly,60,15,10);
  rect(lx,ly, 30,55,15);
  
  }
  
  
  function legB(c,lx,ly){
    //console.log("arms");
    fill(c);
    //noStroke();
    //rotate(45);
    //rect(lx,ly,60,15,10);
    rect(lx,ly, 35,35,15);
    
    }


}