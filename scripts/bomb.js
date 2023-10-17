let bombState;
let bombTime;

const leftLR = 0;
const middleLR = 1;
const rightLR = 2;
const rightRL = 3;
const middleRL = 4;
const leftRL = 5;

let imgBombRL, imgBombLR;

function drawBomb(state) {
  if (state == leftLR) image(imgBombLR, 225, 150);
  else {
    if (state == middleLR) image(imgBombLR, 275, 150);
    if (state == rightLR) image(imgBombLR, 325, 150);
    if (state == rightRL) image(imgBombRL, 325, 150);
    if (state == middleRL) image(imgBombRL, 275, 150);
    if (state == leftRL) image(imgBombRL, 225, 150);
  }
}

function moveBomb(fps) {
  if (bombState == leftLR) {
    bombTime++;
    if (bombTime >= fps / 2) {
      bombState = middleLR;
      bombTime = 0;
    }
  }
  if (bombState == middleLR) {
    bombTime++;
    if (bombTime >= fps) {
      bombState = rightLR;
      bombTime = 0;
    }
  }
  if (bombState == rightLR) {
    bombTime++;
    if (bombTime >= fps / 2) {
      bombState = rightRL;
      bombTime = 0;
    }
  }
  if (bombState == rightRL) {
    bombTime++;
    if (bombTime >= fps / 2) {
      bombState = middleRL;
      bombTime = 0;
    }
  }
  if (bombState == middleRL) {
    bombTime++;
    if (bombTime >= fps) {
      bombState = leftRL;
      bombTime = 0;
    }
  }
  if (bombState == leftRL) {
    bombTime++;
    if (bombTime >= fps / 2) {
      bombState = leftLR;
      bombTime = 0;
    }
  }
}

function changeBombVelocity() {
  if (finalPointTime == 0) {
    if (redPoints < 3 && bluePoints < 3) moveBomb(30);
    else {
      if (
        (redPoints >= 3 || bluePoints >= 3) &&
        redPoints < 5 &&
        bluePoints < 5
      )
        moveBomb(24);
      else {
        if (
          (redPoints >= 5 || bluePoints >= 5) &&
          redPoints < 10 &&
          bluePoints < 10
        )
          moveBomb(18);
        else {
          if (
            (redPoints >= 10 || bluePoints >= 10) &&
            redPoints < 15 &&
            bluePoints < 15
          )
            moveBomb(12);
          else {
            if (
              (redPoints >= 18 || bluePoints >= 18) &&
              redPoints < 25 &&
              bluePoints < 25
            )
              moveBomb(6);
            else moveBomb(3);
          }
        }
      }
    }
  }
}
