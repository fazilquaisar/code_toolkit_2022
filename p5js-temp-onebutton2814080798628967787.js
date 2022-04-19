let a;
let b;
let score;

function setup() {

  createCanvas(800, 800);
  a = int(random(10));
  b = int(random(10));
  background(255);
  input = createInput();
  input.position(width/2, -50 +height/2);

  button = createButton('submit');
  button.position(input.x + input.width, -50 + height/2);
  button.mousePressed(checkAnswer);
  
  score = 0;
}

function draw() {
  textSize(100);
  text(a+ "*" + b,width/4,height/2);
  text("score: " + score,width/4,height/4);
}


function checkAnswer() {
  let answer = input.value();
  if(int(answer) === a*b){
      a = int(random(10));
      b = int(random(10));
      score += 1;
    background(255);
  }
}
