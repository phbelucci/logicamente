let bg;
let y = 0;
let x = 0;
let sizeXCanvas = 880;
let sizeYCanvas = 500;
let basePlayer1;
let basePlayer2;

let player1;
let player2;
function preload(){
  bgPlayer1 = loadImage('./assets/1_game_background.png');
  bgPlayer2 = loadImage('./assets/2_game_background.png');
  basePlayer1 = sizeYCanvas / 2;
  basePlayer2 = sizeYCanvas;
}
function setup() {
  createCanvas(sizeXCanvas, sizeYCanvas);
  player1 = new Player((width / 2) - 30, (height / 2) -60, 30,30);
  player2 = new Player(10, height - 60,30,30);
}

function keyPressed() {
  if (key == ' ') {
    player1.jump(basePlayer1)
    player2.jump(basePlayer2)
  } 
} 

function draw() {

  //Background
  image(bgPlayer1, x, y, sizeXCanvas /2, sizeYCanvas /2);
  image(bgPlayer2, x, sizeYCanvas /2, sizeXCanvas /2, sizeYCanvas /2);
  
  //Players
  player1.show();
  player2.show();
  
  let player1PositionX = player1.getPositionX();
  let player2PositionX = player2.getPositionX();
  
  
  if(player1PositionX > (width - 885)){
    player1.move(basePlayer1, "left");
  }
}

