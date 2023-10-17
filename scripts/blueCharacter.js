let blueState;
let blueTime;
let bluePoints, blueLifes;
let imgIdleBlue, imgFightingBlue, deadBlue;
let imgFullLifeBlue, imgTwoLifeBlue, imgOneLifeBlue;

function drawBlue(state, x) {
  image(imgShadow, x, 125);
  if (state == idle) {
    image(imgIdleBlue, x, 150);
  }
  else {
    if (state == fighting) image(imgFightingBlue, x, 150);
    if (state == dead) image(imgDeadBlue, x, 150);
  }
}

function drawBlueLifeBar() {
  if (blueLifes == 3)
    image(imgFullLifeBlue, 470, 75);
  else {
    if (blueLifes == 2) image(imgTwoLifeBlue, 470, 75);
    if (blueLifes == 1) image(imgOneLifeBlue, 470, 75);
    if (blueLifes == 0) image(imgNoLife, 470, 75);
  }
}

function delayChangingBlueStates() {
  if (blueState == fighting) {
    blueTime++;
    if (blueTime >= 30) {
      blueState = idle;
      blueTime = 0;
    }
  }

  if (blueLifes == 0) {
    blueTime++;
    blueState = dead;
    if (blueTime >= 60) {
      startFrames = intro;
      isEveryoneAlive = false;
    }
  }
}

function fightFeedbackBlue() {
  if (blueState == fighting) {
    if (bombState == rightRL || bombState == rightLR) bluePoints++;
    else {
      if (isMultiPlayerGame == true && blueLifes > 0)
        blueLifes--;
    }
  }
}
