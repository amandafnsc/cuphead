let finalPointTime;

let botTime;

function singlePlayerFrame() {
  drawBackground();
  
  fill("#433931");
  textSize(70);
  text(redPoints + " x " + bluePoints, 272, 100);
  
  fill("#433931");
  textSize(30);
  text("first with 10 points win", 220, 125);

  fill("#924844");
  textSize(45);
  text("press 'A'", 128, 185);

  fill("#555A85");
  textSize(45);
  text("bot", 455, 185);

  drawRed(redState, 125);
  drawBlue(blueState, 425);
  
  botSinglePlayer();

  drawBomb(bombState);
  changeBombVelocity();

  delayChangingRedStates();
  delayChangingBlueStates();
  delayFinal();
}

function delayFinal() {
  if (isMultiPlayerGame == false && redPoints >= 10 || bluePoints >= 10) {
    finalPointTime ++;
    if (finalPointTime >= 90) {
      startFrames = intro;
      isEveryoneAlive = false;
    }
  }
}

function botSinglePlayer() {
  if (finalPointTime == 0) {
    botTime++;
    if (botTime >= random(60, 240)) {
      blueState = fighting;
      fightFeedbackBlue();
      botTime = 0;
    }
  }
}
