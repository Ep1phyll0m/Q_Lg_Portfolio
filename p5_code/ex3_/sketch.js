let mo;
let counter = 0;
let speedX;
let speedY;
let loX;
let loY;
//let tbh;
// let tbhYoung;
// let tbhOld;

function preload() {

  mo = loadImage("assets/Moustache.png");
 // tbh = loadImage("assets/TbhCreature.jpg");
}
function setup() {
  createCanvas(500,500);
  background(180);
  fill(255);
  angleMode(DEGREES);
  speedX = random(8,16);
    speedY = random(16,8);   
    loX = height /4;
    loY = width /4;

}

function draw() {

  push();
  if (loX < 0) {
    speedX = -speedX;
}
if (loX > width) {
    speedX = -speedX;
}
if (loY < 0) {
    speedY = -speedY;
}
if (loY > height) {
    speedY = -speedY;
}

// update the position of the ball and print to screen
loX += speedX;
loY += speedY;
fill(255);
tbhYoung(loX, loY, loX, loY);
pop();

push();
tbhOld(loX/4,loY/4,loX/4,loY/4);
pop();

  img = loadImage('assets/Moustache.png');
  
  tbhOld(color(225), 400,200 );

  //tbhYoung(color(210), 100,100 );

  //tbh(color(195), 100,350 );


function tbhOld(k,lx,ly) {
  //console.log("toon1");
  
 push();
  //translate(width / 2, height / 2);
translate(lx,ly);
// //  let k = color(225,350,200);
  rotate(random(10,20));

  body(k, loX, loY);
  head(k, loX, loY);
  //arm(k,10,-55);
  legB(k,90,40); // right arm
  legF(k,25,50); // bot left arm
  legF(k,60,50); // bot right arm
  //noStroke();
  legB(k,-7,37.5); // left arm
  decor(k,10,10)
  // tail();
  pop();

}

function tbhYoung(k,lx,ly) {
  //console.log("toon1");
  
 push();
 // translate(width / 2, height / 2);
//  translate(p5.Vector.fromAngle(millis() / 1000, 40));
 translate(lx,ly);
 rotate(random(30,50));
scale(0.75);
  body(k);
  head(k);
  //arm(k,10,-55);
  legB(k,90,40); // right arm
  legF(k,25,50); // bot left arm
  legF(k,60,50); // bot right arm
  //noStroke();
  legB(k,-7,37.5); // left arm
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
fill(20);
    ellipse(-5,-15, 30,30);
    line(2,9, 35,9);
fill(200);
  
    ellipse(-11,-20,10);
    ellipse(38,-19,10);

    //image(mo, -30, -15, 100,50);

}

function legF(c,lx,ly){
//console.log("arms");
fill(c);
//noStroke();
// rotate(45);
// rect(lx,ly,60,15,10);
rect(lx,ly, 25,55,15);

}


function legB(c,lx,ly){
  //console.log("arms");
  fill(c);
  //noStroke();
  // rotate(45);
  // rect(lx,ly,60,15,10);
  rect(lx,ly, 25,55,15);
  
  }

function legB(c,lx,ly){
 //console.log("arms");
 fill(c);
 //noStroke();
 //rect(lx,ly,60,15,10);
 //rotate(45);
 rect(lx,ly, 30,55,15);
 
 }

function decor(lx, ly){
//console.log("tail");
//img = loadImage('assets/Moustache.png');
image(mo, -30, -15, 100, 50);
}}