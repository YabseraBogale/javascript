function setup() {
  createCanvas(400, 400);
}
let Crx=20;
let Cry=20;
let ball=200;
function draw() {
  background(0,0,0);
  circle(Crx,Cry,10);
  
  circle(ball,ball,10);
  if(ball===Crx){
     ball=Math.random(0,400)+13;
    console.log(ball);
    console.log(Crx," & ",Cry)
  }
  fill(250,0,0);
}
function keyTyped(){
  if(key==="a" || key==="A"){
    Crx-=13;
  }
  else if(key==="d" || key==="D") {
    Crx+=13;
  }
  else if(key==="S" || key==="s"){
        Cry+=13;    
  }
  else if(key==="W" || key==="w"){
        Cry-=13;    
  }
  
  
}



