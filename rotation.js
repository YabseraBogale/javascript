let ro=0;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  background(0);
}

let x=200;
function draw() {
  fill(220);
  circle(x,x,50);
  translate(200,200);
  rotate(ro);
  fill(250,0,0);
  circle(10,100,20);
  circle(100,100,50);
  ro=ro+1;
}
