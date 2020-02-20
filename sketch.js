/*
	Glitch Image Arrays
    
    by: Lauren Marone
*/

var state;
var stateDraw = 0;
var stateSilly = 1;
var stateBoom = 2;
var stateSpeak = 3;
var stateWhy = 4;
var stateGrow = 5;

let iOne;
let iTwo; 
let iThree;
let iFour;
let iFive;
let iSix;
let speakYah;
let blamYah;

var diam = 50;

var d = 5;
var f = 10;




// preload() will exectute before setup()
function preload() {
    iOne = loadImage('assets/Image1.jpg'); //silly		
    iTwo = loadImage('assets/Image2.jpg'); //speak
    iThree = loadImage('assets/Image3.jpg'); //why
    iFour = loadImage('assets/Image4.jpg'); //boom
    iFive = loadImage('assets/Image5.jpg'); //draw
    iSix = loadImage('assets/Image6.jpg'); //pop
    
    speakYah = loadImage('assets/speak.png');
    blamYah = loadImage('assets/blam!.png');
}

function setup() {

  
	createCanvas(1024, 800);
    background(0);
    

    
}

function draw() {


    
    if (state == stateDraw){ 
        drawOne();
    }
    
    else if (state == stateSilly){
        silly();
    }
    
    else if (state == stateBoom){
        boom();
    }
    
    else if (state == stateSpeak){
        speak();
    }
    
    else if (state == stateWhy){
        why();
    }
    
    else if (state == stateGrow){
        grow();
    }
    
}



function drawOne(){
    
    background(255, 25);
    noTint();
    image(iFive, width/2 - 400, height/2 - 250);
    strokeWeight(10);
    stroke(0);
    line(pmouseX, pmouseY, mouseX, mouseY);
    line(mouseX - 50, mouseY - 50, pmouseX - 50, pmouseY - 50);
    line(mouseX - 100, mouseY - 100, pmouseX - 100, pmouseY - 100);
}

function silly(){
    
    background(255);
    noTint();
    image(iOne, width/2 - 400, height/2 - 250);
    
    tint(200, 30, 70, 200);
    image(iOne, mouseX, mouseY);
    
}

function boom(){
    noTint();
    background(255);
    image(iFour, width/2 - 400, height/2 - 250);
    
    if (mouseIsPressed){
        image(blamYah, 20, -100);
    }
}

function speak(){
    noTint();
    background(255);
    image(iTwo, width/2 - 400, height/2 - 250);
    
    image(speakYah, width/2 + 20, height/2 - 300, 300, 250);
    
    if (mouseX > width/2 + 20 && mouseX < 800 && mouseY > height/2 - 300 && mouseY < 350){
        strokeWeight(2);
        textSize(50);
        textAlign(CENTER, CENTER);
        text('I <3 U', width/2 + 180, height/2 - 207);
        fill(0);  
    }
   

}

function why(){
    background(255);
    noTint();
    image(iThree, width/2 - 400, height/2 - 250);
    
    if (mouseIsPressed){
        strokeWeight(2);
        textSize(100);
        textAlign(CENTER, CENTER);
        text('???', mouseX, mouseY);
        fill(0, 102, 153); 
    }
    
}

function grow(){
    background(255);
    noTint();
    
    if (mouseIsPressed){
        image(iSix, width/2 - 400, height/2 - 250, f++ * 2, d++);
    }
    
    else {
        image(iSix, width/2 - 400, height/2 - 250);
    }
    
    
    
}


function keyPressed(){
    if (key == 'd'){
        state = stateDraw;
    }
    
    else if (key == 'l'){
        state = stateSilly;
    }
    
    else if (key == 'b'){
        state = stateBoom;
    }
    
    else if (key == 's'){
        state = stateSpeak;
    }
    
    else if (key == 'w'){
        state = stateWhy;
    }
    
    else if (key == 'p'){
        state = stateGrow;
    }
}

function mouseClicked(){
  if (diam == 50){
    diam = 150;
  }
  else{
    diam = 50;
  }
  
}



