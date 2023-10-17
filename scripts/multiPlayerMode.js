function multiPlayerFrame() {
  drawBackground();
  
  fill("#433931");
  textSize(70);
  text(redPoints + " x " + bluePoints, 272, 100);

  fill("#924844");
  textSize(45);
  text("press 'A'", 128, 185);

  fill("#555A85");
  textSize(45);
  text("press 'L'", 428, 185);

  drawRed(redState, 125);
  drawBlue(blueState, 425);

  drawBomb(bombState);
  changeBombVelocity();

  drawRedLifeBar();
  drawBlueLifeBar();

  delayChangingRedStates();
  delayChangingBlueStates();
}