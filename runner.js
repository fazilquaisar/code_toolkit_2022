let poopimg;
let personimg;
let hydrantimg;
let trashimg;
let roadimg;

let runner;
let x1 = 0;
let x2;
var scrollSpeed = 5;
let timebetween = 100;
let obstacle;
let images = [];
let lose = 0;
let eventDate = new Date(2029, 7, 21, 0, 0);
let sldCurrentDate;
let birthdayDate = new Date(2029, 7, 21, 0, 0);

var blood={
  x:100,
  y:50
}

var col={
  r:255,
  g:0,
  b:0
}

function preload(){
  personimg = loadImage("data/person.png");
  hydrantimg = loadImage("data/hydrant.png");
  trashimg = loadImage("data/trash.png");
  poopimg = loadImage("data/poop.png");
  roadimg = loadImage("data/road.jpeg");
  images = [hydrantimg,trashimg,poopimg];
}

function setup() {
  runner = new Runner(100,300);
  obstacle = new Obstacle();
  createCanvas(800,440);
  x2 = width;
}


function draw() {
  if(lose == 1){
    background("white");
    blood.x=random(0,width);
    blood.y=random(0,height);
    noStroke();
    let s=random(20,50);
    let o=random(80,200);
    fill(200,0,0,o);
    ellipse(blood.x,blood.y,s,s);
    text("you died :(", width/4 - 15,height/2);
    fill(255, 255, 255);
    textSize(75);
    return;
  }
    
  image(roadimg,x1,0,800,440);
  image(roadimg,x2,0,800,440);
  x1 -= scrollSpeed;
  x2 -= scrollSpeed;
  
  if (x1 < -width){
    x1 = width;
  }
  if (x2 < -width){
    x2 = width;
  }
  runner.display();
  obstacle.display();
  obstacle.move();
  if(runner.y > 275 && sq(runner.x - obstacle.x) <  1500){
    lose = 1;
  }
}

function keyPressed() {
  console.log(keyCode);
  if (keyCode == 32)
    runner.jump();
}

function Runner(x,y){
  this.x = x;
  this.y = y;
  this.onground = 2;
  this.display = function() {
    image(personimg,this.x, this.y);
    personimg.resize(100,100);
    if(this.y < 300)
      this.y =this.y + 1;
    if (this.y == 300)
      this.onground = 2;
  };
  this.jump = function(){
    if(this.onground > 0){
      this.y -= 100;
      this.onground--;
    }
  }
}

function  Obstacle(){
  this.x = 700;
  this.image = int(random(3));
  this.image = images[this.image];
  this.display = function(){
    image(this.image,this.x,350,50,50);
  }
  this.move = function(){
    this.x = this.x - scrollSpeed;
    if(this.x <= 0){
      this.x = 800;
        this.image = int(random(3));
  this.image = images[this.image];
    }
  }
  
}
