let isEveryoneAlive = false;
let isMultiPlayerGame = true;

let textTime = 0;

const idle = 0;
const fighting = 1;
const dead = 2;

function setup() {
  createCanvas(650, 400);

  textFont(fontPixel, 45);

  resetValues();
  startFrames = intro;
}

function draw() {
  if (isEveryoneAlive) {
    if (isMultiPlayerGame == true) multiPlayerFrame();
    else singlePlayerFrame();
  } else {
    if (startFrames == intro) introFrame();
    if (startFrames == ready) readyFrame();
  }
}

function drawBackground() {
  image(imgBackground, 0, 0);
  image(imgGameFrame, 50, 50);
}

function resetValues() {
  finalPointTime = 0;
  
  redLifes = 3;
  redTime = 0;
  redPoints = 0;
  redState = idle;

  blueLifes = 3;
  blueTime = 0;
  bluePoints = 0;
  blueState = idle;
  
  botTime = 0;

  bombTime = 0;
  bombState = leftLR;
}

function keyPressed() {
  if (keyCode == 49 && startFrames == intro) {
    isMultiPlayerGame = false;
    startFrames = ready;
  }

  if (keyCode == 50 && startFrames == intro) {
    isMultiPlayerGame = true;
    startFrames = ready;
  }

  if (finalPointTime == 0 && keyCode == 65 && redLifes > 0) {
    redState = fighting;
    fightFeedbackRed();
  }

  if (isMultiPlayerGame == true && keyCode == 76 && blueLifes > 0) {
    blueState = fighting;
    fightFeedbackBlue();
  }

  if (startFrames == ready && keyCode == 32) {
    resetValues();
    isEveryoneAlive = true;
  }
}
