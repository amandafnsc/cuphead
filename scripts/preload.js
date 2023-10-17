let imgTitle;
let imgReady;
let imgGameFrame;
let imgBackground;

let imgSinglePlayerButton;
let imgMultipPlayerButton;

let imgShadow;

let imgNoLife;

let fontPixel;

function preload() {
  imgTitle = loadImage("assets/title.png");
  imgReady = loadImage("assets/ready.png");
  imgGameFrame = loadImage("assets/gameFrame.png");
  imgBackground = loadImage("assets/background.png");
  
  imgSinglePlayerButton = loadImage("assets/singlePlayerButton.png");
  imgMultiPlayerButton = loadImage("assets/multiPlayerButton.png");
  
  imgShadow = loadImage("assets/shadow.png");
  
  imgIdleRed = loadImage("assets/idleRed.png");
  imgFightingRed = loadImage("assets/fightingRed.png");
  imgDeadRed = loadImage("assets/deadRed.png");
  imgIdleBlue = loadImage("assets/idleBlue.png");
  imgFightingBlue = loadImage("assets/fightingBlue.png");
  imgDeadBlue = loadImage("assets/deadBlue.png");

  imgBombRL = loadImage("assets/bombRL.png");
  imgBombLR = loadImage("assets/bombLR.png");

  imgFullLifeRed = loadImage("assets/fullLifeRed.png");
  imgTwoLifeRed = loadImage("assets/twoLifeRed.png");
  imgOneLifeRed = loadImage("assets/oneLifeRed.png");
  imgFullLifeBlue = loadImage("assets/fullLifeBlue.png");
  imgTwoLifeBlue = loadImage("assets/twoLifeBlue.png");
  imgOneLifeBlue = loadImage("assets/oneLifeBlue.png");
  imgNoLife = loadImage("assets/noLife.png");

  fontPixel = loadFont("assets/Pixels.ttf");
}