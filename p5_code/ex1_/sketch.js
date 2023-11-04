function setup() {
    createCanvas(450, 450);
    background(128, 0, 64);
  }
  
  function draw() {
    let y1 = mouseX;
    if (mouseY < 320)  {
     
      for (let i = 0; i < mouseY; i += 20) {

       r1 = random(230,56, 123);  
        stroke(r1-mouseY,mouseX-50,60);
        fill(r1);
        ellipse( i+5, y1, 45, 90 );
        console.log("r1 = " + r1);
       }
  
    }
    if (mouseX > 150)  {
  
      let mx = mouseX;
      for (let i = 0; i < mouseX; i += 20) {
        noStroke();
        r2 = random(60,255);
        fill(r2,30);
        rect( mx, i+50, 80, 50 );
        fill(r1,r1,r1/2)  
        arc(mouseY+90, mouseX-80, 80, 80, 0, PI + QUARTER_PI*3, PIE); 
        console.log("r2 = " + r2);
       }
  
      if (mouseY < 300) {
  
        fill(89-mouseX,42,0,78+mouseY);
        triangle(mouseX,y1,mouseY,y1+30,mouseX+50,y1+50);
  
      }  else {
        
        for (let i = 0; i < mouseX; i += 20) {
          r3 = random(200);
          fill(200,100,0,r3);
          ellipse( i+5, y1, 10, 10 );
          console.log("r3 = " + r3);
         }
  
        fill(0,102,0, 51);
        rect(mouseX+100,y1,30,30);
        quad(mouseX+50,y1,30,50, mouseY,mouseX);  
  
      }
  
  
    }
  
  }

 