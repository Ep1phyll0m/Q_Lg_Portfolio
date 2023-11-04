let currentkey = '1';
let gkcount;
let cx,xy;
let bgc;
let gridSize;
let imgSize;
let horse;
let horse2;
let grass;
let dirt;
let pearl;
let cimg;
let k;
let tool;
let mark;
let center;

function setup() {
    createCanvas(750, 750);
    background(255);
    smooth();
    bgc = color(255);
    k = color(255,0,0);
    // set up a assets folder then add an image.
    horse = loadImage("assets/MC-Horse1.png");
    horse2 = loadImage("assets/MC-Horse2.jpg");
    grass = loadImage("assets/MC_dirtblock1.png");
    dirt = loadImage("assets/MC-dirtblock2.jpeg");
    cx = width/2;
    cy = height/2;
    gridSize = 40;
    imgSize = 40;
    textSize(40);
    sWeight = 2;
    cimg = horse;
    tool = "";
    mark = 0;
}


function draw() {
    // triggering the clear_print function
    if( keyIsPressed) {
      stampChoice();  
    }
    // triggering the newkeychoice
    if(mouseIsPressed) {
      // use this?
    }
}


function stampChoice() {
 
// key global variable contains whatever key was last pressed
let currentkey = key;

switch(currentkey) {

case 'a':
  console.log("a left");  // left
  cx+= -gridSize; 
  mark = 1;
  break;
case 'w':
  console.log("w up");  // up
  cy+= -gridSize;  
  mark = 1;
  break;
case 'd':
  console.log("d  right");  //right
  cx+= gridSize;
  mark = 1;
  break;
case 's':
  console.log("s back");  // back
  cy+= gridSize;
  mark = 1;
  break;
case '1':
  console.log("1 - horse");  // first img
  cimg = horse;
  tool = "pix";
  break;
case '2':
  console.log("2 - horse2");   // second img
  cimg = horse2;  // replace with your own images
  tool = "pix";
  break;
case 'g':
  console.log("g - grass");   // grass texture
cimg = grass;
  tool = "pix";
  break;
case 'r':
  console.log("r - dirt");   //dirt texture
    cimg = dirt; 
  tool = "pix";
  break;
case 'b':
  console.log("b - erase");  // erase with bg color
  tool = "erase";
  break;
case 'e':
  console.log("e - pearl");   //ender pearl 
  tool = "rect";
  break;        
case '>':        
  console.log("+"); 
  imgSize+=10;
  break;
case '<':
  console.log("-"); 
  imgSize-=10;
  break;
default:             // Default executes if the case labels
  console.log("None");   // don't match the switch parameter
  break;
}

if (mark == 1) {
  if (tool == "pix"  )  {
    stampImage(cimg,cx,cy,imgSize); 
  } else if (tool == "circ") {
    drawCircle( k, cx,cy, imgSize, imgSize);
  } else if (tool == "rect"){
    drawRect( k, cx,cy, imgSize, imgSize)
  } else if (tool == "erase"){
    eraser(bgc,cx,cy,imgSize);
  } else {
    // do nothing
  }
mark=0;  // resets the option if we make a mark or not
}

if (key == 'x' || key == 'X') {
  background(bgc);
}

// if (key == 'p' ) {
//  saveFrames('image-0', 'png', 1, 1);
//   key = '';  // resets the key so it does not make more than one image.
// }

key = '';  // resets the key so it does not make more than one image.

}

function stampImage(pix,lx,ly,s)  {
  // cheap centering trick with the s var /2
  image(pix,lx-(s/2),ly-(s/2),s,s);
}

function drawRect( k,  lx, ly,  w, h) {
  strokeWeight(sWeight);
  stroke(46,154,136);
  fill(1,38,32);
  rect(lx-(w/2),ly-(h/2), w/4, h/4);
    
    //ellipse(lx-10, ly, w, h);
    //ellipse(lx+10, ly, w, h);
    //ellipse(lx, ly+random(10), w, h);
}
function eraser( k, lx, ly, sz) {
  fill(k);
  stroke(k);
  rect(lx, ly, sz,sz);
}


