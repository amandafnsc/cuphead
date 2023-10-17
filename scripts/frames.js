let startFrames;
const intro = 0;
const ready = 1;

function introFrame() {
  image(imgBackground, 0, 0);
  image(imgTitle, 120, 75);
  
  image(imgSinglePlayerButton, 150, 209);
  fill("#E1DDCF");
  textSize(35);
  text("press '1' for single player", 205, 235);
  
  image(imgMultiPlayerButton, 150, 260);
  fill("#E1DDCF");
  textSize(35);
  text("press '2' for multiplayer", 210, 285);
}

function readyFrame() {
  drawBackground();
  
  image(imgReady, 200, 150);
  
  textTime++;
  
  if (textTime < 30) {
  fill("#433931");
  textSize(45);
  text("press 'space'", 250, 240);
  } else {
    if (textTime == 40) textTime = 0;
  }

  drawRed(idle, 75);
  drawBlue(idle, 475);
}