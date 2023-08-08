$("#level").fadeOut(1);
var birdPosition = 300;
var birdVelocity = 0;
var gravity = 0.3;
var groundLevel = 560;
var goingDown = false;
var obstaclePosition = 600;
var obs2 = obstaclePosition + 210;
var obs3 = obs2 + 210;
var obs4 = obs3 + 210;
var obstacleMoving = false;
var obstacle12Vanished = false;
var obstacle34Vanished = false;
var obstacle56Vanished = false;
var obstacle78Vanished = false;
var obstacleSpeed = 1;
var level = 1;
var touched = false;
function changePosition() {
  $("#bird").css({ top: birdPosition + "px" });
  birdPosition += birdVelocity;
  birdVelocity += gravity;

  if (birdPosition >= groundLevel) {
    clearInterval(intervalId);
    birdPosition = groundLevel;
    birdVelocity = 0;
    goingDown = false;
    gameOver();
  }
}

function jump() {
  birdVelocity = -5; // Jumping velocity, adjust as needed
}

function startGame() {
  $("h1").fadeOut(200);
  $("#level").fadeIn(500);
  $("#level").text("level: " + level);
  goingDown = true;
  $("#bird").css("background-color", "white");
  jump();

  // Start the game by calling changePosition continuously
  intervalId = setInterval(changePosition, 10);
}
// button click and keyboard trigger partw
$(document).keydown(function (event) {
  if (!goingDown) {
    if (
      event.key === " " ||
      event.key === "w" ||
      event.key === "W" ||
      event.key === "ArrowUp"
    ) {
      if(touched){
        location.reload();
      }
      startGame();
      if (!obstacleMoving) {
        intervalObsId = setInterval(animateObstacle, 11);
      }
      obstacleMoving = true;
    }
  } else if (
    (event.key === " " ||
      event.key === "w" ||
      event.key === "W" ||
      event.key === "ArrowUp") &&
    birdPosition > 50
  ) {
    if(touched){
      location.reload();
    }
    jump();
  }
});
$(document).click(function (event) {
  if (!goingDown) {
    if (event) {
      startGame();
      if(touched){
        location.reload();
      }
      if (!obstacleMoving) {
        intervalObsId = setInterval(animateObstacle, 11);
        getBoundingClientRect();
      }
      obstacleMoving = true;
    }
  } else if (event && birdPosition > 50) {
    if(touched){
      location.reload();
    }
    jump();
  }
});

function animateObstacle() {
  obstaclePosition -= obstacleSpeed;
  obs2 -= obstacleSpeed;
  obs3 -= obstacleSpeed;
  obs4 -= obstacleSpeed;
  var obstactlePos = obstaclePosition + "px";
  var obs21 = obs2 + "px";
  var obs31 = obs3 + "px";
  var obs41 = obs4 + "px";
  document.documentElement.style.setProperty("--left1", obstactlePos);
  document.documentElement.style.setProperty("--left2", obs21);
  document.documentElement.style.setProperty("--left3", obs31);
  document.documentElement.style.setProperty("--left4", obs41);
  vanishObstacle();
  if (!touched) {
    checkTouch();
  }
}
function vanishObstacle() {
  if (obstaclePosition === 10) {
    $("#obstacle1").fadeOut(500);
    $("#obstacle2").fadeOut(500);
    obstacle12Vanished = true;
  }
  if (obs2 === 10) {
    $("#obstacle3").fadeOut(500);
    $("#obstacle4").fadeOut(500);
    obstacle34Vanished = true;
  }
  if (obs3 === 10) {
    $("#obstacle5").fadeOut(500);
    $("#obstacle6").fadeOut(500);
    obstacle56Vanished = true;
  }
  if (obs4 === 10) {
    $("#obstacle7").fadeOut(500);
    $("#obstacle8").fadeOut(500);
    obstacle78Vanished = true;
  }
  if (obstacle78Vanished === true) {
    level++;
    $("#level").text("level: " + level);
  }
  appearObstacle();
}
function appearObstacle() {
  if (obstacle12Vanished) {
    obstaclePosition = 1260;
    $("#obstacle1").fadeIn(500);
    $("#obstacle2").fadeIn(500);
    obstacle12Vanished = false;
  }
  if (obstacle34Vanished) {
    obs2 = 1260;
    $("#obstacle3").fadeIn(500);
    $("#obstacle4").fadeIn(500);
    obstacle34Vanished = false;
  }
  if (obstacle56Vanished) {
    obs3 = 1260;
    $("#obstacle5").fadeIn(500);
    $("#obstacle6").fadeIn(500);
    obstacle56Vanished = false;
  }
  if (obstacle78Vanished) {
    obs4 = 1260;
    $("#obstacle7").fadeIn(500);
    $("#obstacle8").fadeIn(500);
    obstacle78Vanished = false;
  }
}

function collision($div1, $div2) {
  var x1 = $div1.offset().left;
  var y1 = $div1.offset().top;
  var h1 = $div1.outerHeight(true);
  var w1 = $div1.outerHeight(true);
  var b1 = y1 + h1;
  var r1 = x1 + w1;
  var x2 = $div2.offset().left;
  var y2 = $div2.offset().top;
  var h2 = $div2.outerHeight(true);
  var w2 = $div2.outerWidth(true);
  var b2 = y2 + h2;
  var r2 = x2 + w2;
  if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
  return true;
}
function checkTouch() {
  if (collision($("#bird"), $("#obstacle1")) === true) {
    gameOver();
    
  }
  if (collision($("#bird"), $("#obstacle2")) === true) {
    gameOver();
    
  }
  if (collision($("#bird"), $("#obstacle3")) === true) {
    gameOver();
    
  }
  if (collision($("#bird"), $("#obstacle4")) === true) {
    gameOver();
    
  }
  if (collision($("#bird"), $("#obstacle5")) === true) {
    gameOver();
    
  }
  if (collision($("#bird"), $("#obstacle6")) === true) {
    gameOver();
    
  }
  if (collision($("#bird"), $("#obstacle7")) === true) {
    gameOver();
    
  }
  if (collision($("#bird"), $("#obstacle8")) === true) {
    gameOver();
    
  }
}

function gameOver() {
  touched = true;
  $("#level").fadeOut(1);
  $("#display").fadeIn(10);
  $("#display").text("ohhhhh no! click or space to relode");
  document.querySelector("link[href='style.css']").href = "gameOver.css";
  $("#bird").css("background-color", "rgb(192, 115, 115)")
}

