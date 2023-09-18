// Homework 1 by Abdulrahman Qureshi 
// This sketch should respond to user input by changing something visual
//For full points, there should be at least five (5) shapes and/or text functions within the sketch. 
//These functions should have their properties modified using additional functions (ex. fill(), noStroke(), textSize())

// 5 shapes/text being used: quad/ellipse/square/triangle/text 

// variables for prgram 
var CircleSize = 100 
var SquareSize  = 95 
var TriangleSize = 90
var QuadSize = 100
var cR = 255
var cG = 255
var cB = 255


function setup() {
  createCanvas(600, 600);

}


let value  = 0;
function draw() {
  background(0,0,0);
  
  fill(cR,cG,cB) 
  strokeWeight(4);

  ellipse(130,100,CircleSize) // circles 
  ellipse(150,100,CircleSize)


  fill(cR,cG,cB)
  strokeWeight(0);

  square(110, 100,  SquareSize); // squares 
  square(140, 120,  SquareSize);
  square(170, 150,  SquareSize);

  
  
  fill(cR,cG,cB)

  strokeWeight(0);
  triangle(600, 200, 150, 150, 200, TriangleSize); // Largest Triangle

  strokeWeight(0);
  triangle(600, 100, 40, 80, 150, TriangleSize); // Triangle

  strokeWeight(0);
  triangle(600, 100, 70, 100, 90, TriangleSize); // Triangle 

  strokeWeight(4);
  triangle(200, 500, 70, 150, 100, TriangleSize); //  other triangles with a higher strokeweight 
  triangle(70, 300, 70, 100, 100, TriangleSize);
  triangle(0, 300, 70, 70, 100, TriangleSize);
  triangle(0, 200, 70, 40, 100, TriangleSize);
  triangle(0, 150, 90, 10, 100, TriangleSize);




  fill(cR,cG,cB)
  quad(70, 82, 106, 70, 70, 58, 34, QuadSize); // rombous that can chnage shape when mous eis pressed 
  
  // / x1, y2, x2, y2, x3, y3, x4, y4
  
  textSize(15);
  text('Transforming Beast by AQ', random(width), random(height));// text randomly appearing on screen 


  fill(value)
  point(70, 70); // eyeball for monster 
  strokeWeight(100);

  

}



function mousePressed(){

  CircleSize = random(80,200) // random location for cicle
  SquareSize = random(40,200) // random location for square
  TriangleSize = random (20,200) // random location for triangle 
  QuadSize = random (80,200) // random location for quad 
  cR = random(255)
  cG = random(255)
  cB = random(255)

}




