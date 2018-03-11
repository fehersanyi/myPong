'use strict';
let paddleHeight = 150;
let paddleWidth = 10;
let ballRadius = 25;
let halfPaddleHeight = paddleHeight / 2;
let speedOfPaddle1 = 0;
let positionOfPaddle1 = 460;
let speedOfPaddle2 = 0;
let positionOfPaddle2 = 460;
let topPositionOfBall = 510;
let leftPositionOfBall = 820;
let topSpeedOfBall = Math.random() * -2 - 3;
let leftSpeedOfBall = -1 * (Math.random() * 2 + 3);
let score1;
let score2;
let side = 0;

document.addEventListener('keydown', function (e) {
  if (e.keyCode == 87 || e.which == 87) { // W key
    positionOfPaddle1 -= 10;
    document.getElementById("paddle1").style.top =
      (positionOfPaddle1) + "px"
  }
  if (e.keyCode == 83 || e.which == 83) { // S Key
    positionOfPaddle1 += 10;
    document.getElementById("paddle1").style.top =
      (positionOfPaddle1) + "px";
  }
  if (e.keyCode == 38 || e.which == 38) { // up arrow
    positionOfPaddle2 -= 10;
    document.getElementById("paddle2").style.top =
      (positionOfPaddle2) + "px";
  }
  if (e.keyCode == 40 || e.which == 40) { // down arrow
    positionOfPaddle2 += 10;
    document.getElementById("paddle2").style.top =
      (positionOfPaddle2) + "px";
  }
}, false);

document.addEventListener('keydown', function (e) {
  if (e.keyCode == 87 || e.which == 87) { // W key
    speedOfPaddle1 = -10;
  }
  if (e.keyCode == 83 || e.which == 83) { // S Key
    speedOfPaddle1 = 10;
  }
  if (e.keyCode == 38 || e.which == 38) { // up arrow
    speedOfPaddle2 = -10;
  }
  if (e.keyCode == 40 || e.which == 40) { // down arrow
    speedOfPaddle2 = 10;
  }
}, false);
// This function gets called 60 times per second 
window.setInterval(function show() {
  positionOfPaddle1 += speedOfPaddle1;
  positionOfPaddle2 += speedOfPaddle2;
  document.getElementById('paddle1').style.top =
    (positionOfPaddle1) + 'px';
  document.getElementById('paddle2').style.top =
    (positionOfPaddle2) + 'px';
}, 1000 / 60);

document.addEventListener('keyup', function (e) {
  if (e.keyCode == 87 || e.which == 87) {
    speedOfPaddle1 = 0;
  }
  if (e.keyCode == 83 || e.which == 83) {
    speedOfPaddle1 = 0;
  }
  if (e.keyCode == 38 || e.which == 38) {
    speedOfPaddle2 = 0;
  }
  if (e.keyCode == 40 || e.which == 40) {
    speedOfPaddle2 = 0;
  }
}, false);

positionOfPaddle1 += speedOfPaddle1;
positionOfPaddle2 += speedOfPaddle2;
if (positionOfPaddle1 <= 150) {
  positionOfPaddle1 = 150;
}
if (positionOfPaddle2 <= 150) {
  positionOfPaddle2 = 150;
}
if (positionOfPaddle1 >= window.innerHeight - paddleHeight) {
  positionOfPaddle1 = window.innerHeight - paddleHeight;
}
if (positionOfPaddle2 > window.innerHeight - paddleHeight) {
  positionOfPaddle2 = window.innerHeight - paddleHeight;
}

topPositionOfBall += topSpeedOfBall;
leftPositionOfBall += leftSpeedOfBall;

document.getElementById("ball").style.top =
  (topPositionOfBall) + "px";
document.getElementById("ball").style.left =
  (leftPositionOfBall) + "px";

if (leftPositionOfBall <= paddleWidth) {
  if (topPositionOfBall > positionOfPaddle1 &&
    topPositionOfBall < positionOfPaddle1 + paddleHeight) {
    leftSpeedOfBall = -leftSpeedOfBall;
  } else {
    startBall();
  }
}
if (leftPositionOfBall >= window.innerWidth - ballRadius - paddleWidth) {
  if (topPositionOfBall > positionOfPaddle2 &&
    topPositionOfBall < positionOfPaddle2 + paddleHeight) {
    leftSpeedOfBall = -leftSpeedOfBall
  } else {
    startBall();
  }
}
//Window.onload='startBall()'

  function startBall() {
    topPositionOfBall = 510;
    leftPositionOfBall = 820;
    if (Math.random() < 0.5) {
      return side = 1
    } else {
      return side = -1
    }
    //topSpeedOfBall = Math.random() * -2 - 3;
    //leftSpeedOfBall = side * (Math.random() * 2 + 3);
    startBall();
  };
startBall();