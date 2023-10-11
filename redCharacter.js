let redState;
let redTime;
let redPoints, redLifes;
let imgIdleRed, imgFightingRed, deadRed;
let imgFullLifeRed, imgTwoLifeRed, imgOneLifeRed;

function drawRed(state, x) {
  image(imgShadow, x, 125);
  if (state == idle) 
    image(imgIdleRed, x, 150);
  else {
    if (state == fighting) 
      image(imgFightingRed, x, 150);
    if (state == dead) 
      image(imgDeadRed, x, 150);
  }
}

function drawRedLifeBar() {
  if (redLifes == 3) image(imgFullLifeRed, 80, 75);
  else {
    if (redLifes == 2) image(imgTwoLifeRed, 80, 75);
    if (redLifes == 1) image(imgOneLifeRed, 80, 75);
    if (redLifes == 0) image(imgNoLife, 80, 75);
  }
}

function delayChangingRedStates() {
  if (redState == fighting) {
    redTime++;
    if (redTime >= 30) {
      redState = idle;
      redTime = 0;
    }
  }
  
    if (redLifes == 0) {
    redTime++;
    redState = dead;
    if (redTime >= 60) {
      startFrames = intro;
      isEveryoneAlive = false;
    }
  }
}

function fightFeedbackRed() {
  if (redState == fighting) {
    if (bombState == leftRL || bombState == leftLR) redPoints++;
    else {
      if (isMultiPlayerGame == true && redLifes > 0)
        redLifes--;
    }
  }
}
