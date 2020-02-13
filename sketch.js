var color1 = '#1C1C1C'; //matte black
var color2 = '#FFCD94'; //skin color
var color3 = '#F9EF21'; //shirt color
var color4 = '#88583B'; //hair color 
var color5 = '#5a5a5a'; //sunglasses color
var color6 = '#EAC086'; //neck color
var color7 = '#FFC0CB'; //bubble color
var color8 = '#FFFFFF'; //White color

var blowUp = true; // boolean for triggering an action in my animation
var bubbleWidth = 40; // width of the bubble (for animation)
var bubbleHeight = 20; // height of the bubble (for animation)

//state machine variables

var state;
var staticState = 1;
var stateOne = 2;
var stateTwo = 3; 
var stateThree = 4;

function setup(){
 createCanvas(1200, 800);
  
  state = staticState;
}


function draw(){
  
  noCursor();
  background(color1);
 //making sure there are no outlines
  noStroke();
  
// -----------------------
  
  //hair behind my head (left side)
  
  fill(color4);
  ellipse(width/2 -180, height/2 +300, 300, 400);
  
  
  //hair behind my head (right side)
  
  fill(color4);
  ellipse(width/2 + 300, height/2 +200, 150, 400);
  
// -----------------------
  
  //neck
  
  fill(color6);
  rect(width/2 - 50, height/2 + 220, 150, 50);
  
  //head shape
  
  fill(color2);
  ellipse(width/2, height/2, 400, 500);
 
  
  
// -----------------------

  //my shoulders
  
  fill(color3);
  ellipse(width/2 + 70, height/2 + 460, 800, 400);
  

// -----------------------
  
  
  //My hair
  
  fill(color4);
  rotate(-0.2);
  ellipse(width/2 + 125, height/2 + 20, 200, 300);
  
// -----------------------
  
  //hair on my right side
  
  fill(color4);
  ellipse(width/2 + 150, height/2 + 100, 200, 450);
  
  fill(color4);
  rotate(-0.1);
  ellipse(width/2 + 70, height/2 + 20, 200, 300);
  
  fill(color4);
  rotate(0.5);
  ellipse(width/2 + 290, height/2 - 40 , 200, 500);
  

// -----------------------
  
  //hair on my left side
  
  fill(color4);
  rotate(0.1);
  ellipse(width/2 - 150, height/2 - 100 , 150, 400);
  
  fill(color4);
  rotate(0.3);
  ellipse(width/2 - 140, height/2 - 500 , 120, 280);
  
  fill(color4);
  rotate(0.6);
  ellipse(width/2 - 300, height/2 - 850 , 130, 300);
  
  fill(color4);
  rotate(0.6);
  ellipse(width/2 - 650, height/2 - 1100 , 130, 300);
  
  rotate(-1.8);
  fill(color4);
  ellipse(width/2 - 270, height/2 + 150, 200, 500);
  

// -----------------------

  //addition to the face to make my forehead more smooth

  fill(color2);
  ellipse(width/2 +10 , height/2-140, 300, 250);
  
  
  
// -----------------------

  
  //sun glasses

  //left side
  fill(color5);
  rotate(-0.2);
  arc(width/2 - 170, height/2 -12, 150, 150, 0, PI+QUARTER_PI, CHORD);

  //right side
  fill(color5);
  rotate(0.06);
  arc(width/2 + 30, height/2 + 20, 150, 150, 0, PI+QUARTER_PI, CHORD);

  //middle connection
  rotate(0.3);
  fill(color5);
  rect(width/2-40, height/2-210, 100, 10);


//---------------------------Static State------------------------------------
  if (state == staticState){
    // -----------------------
    rotate(-0.1);
    //buble gum addition for fun 
    fill(color7);
    ellipse(width/2 -144 , height/2 + 80, bubbleWidth, bubbleHeight);
  }
  
//---------------------------Angry State------------------------------------
  if(state == stateOne){
    ellipse(width/2, height/2, 50, 50);
    rotate(-0.5);
    fill(color4);
    rect(width/2 - 150, height/2 - 50, 10, 100);
    
    rotate(0.9);
    fill(color4);
    rect(width/2 + 80, height/2 - 600, 10, 100);
    
    
  }
  
  //---------------------------Fancy Pirate State-------------------------------
  if(state == stateTwo){
    fill(color5);
    rotate(-0.2);
    arc(width/2 + 80, height/2 -60, 200, 200, 0, PI+QUARTER_PI, CHORD);
    
    // this is for the eyepatch
    rotate(-0.5);
    fill(color5);
    rect(width/2 - 150, height/2 - 80, 20, 400);
    
    rotate(0.5);
    fill(color5);
    rect(width/2 + 100, height/2 - 50, 230, 20);
    
    //this is for the top hat
    rotate(0.2);
    fill(color3);
    rect(width/2 - 200, height/2 - 400, 550, 80);
    
    fill(color3);
    rect(width/2 - 140, height/2 - 570, 420, 200);
    
  }
  
//---------------------------In the Dark and Scared State-----------------------
  
  if(state == stateThree){
    fill(color1);
    rect(0, -100, 2000, 1000);
    
    //these are my eyes in the dark
    fill(color8);
    ellipse(width/2 - 150, height/2 - 150, 150, 100);
    
    fill(color8);
    ellipse(width/2 + 20, height/2 - 150, 150, 100);
    
    fill(color1);
    ellipse(width/2 - 150, height/2 - 150, 50, 50);
    
    fill(color8);
    ellipse(width/2 - 150, height/2 - 150, 10, 10);
    
     
    fill(color1);
    ellipse(width/2 + 20, height/2 - 150, 50, 50);
    
    fill(color8);
    ellipse(width/2 + 20, height/2 - 150, 10, 10);
    

  }
  
/* my for loop - for this part of the assignmet I modified an old coding assignment from digital media design with help from Lauren to figure out the nuances! */
  fill(random(255),random(255),random(255));
  for(var y = 50; y < mouseY; y+=75){
    rect(mouseX, mouseY, 25, 25)
  }
    
    
  //animation
  
  animate();
 
}

// -----------------------

/*this is the animate function (Which is a slightly modified version
of our in class animated stoplight example) - I used this to 
animate the bubble by making it increae at a slow rate as if it is
being blown and then decreasing at a faster rate like it is popping.
*/
function animate(){
  if(blowUp){
  bubbleHeight = bubbleHeight + 2; //increases the size
  bubbleWidth = bubbleWidth +2;
  }
  
  else{ 
  bubbleHeight = bubbleHeight - 20; // decreases the size
  bubbleWidth = bubbleWidth -20;
  }
  
  
  //if the width and height get to teh max point then set the boolean to false
  if(bubbleWidth > 240 && bubbleHeight > 200){ 
    blowUp = false;
  }
 
  //if the width and height get to the lowest point then set the boolean to true 
  else if(bubbleWidth < 40 && bubbleHeight < 20){
    blowUp = true;
  }
  
  
}



function keyPressed(){
  if(key == 'a'){
    state = stateOne;
  }
  
  //this is to go into the pirate state 'p' for pirate
  else if(key == 'p'){
    state = stateTwo;
  }
  
  else if(key == 'd') {
    state = stateThree;
  }
  
  //this is to return to my ststic state 'r' for 'return'
  else if(key == 's'){
    state = staticState;
  }
  
}




//end