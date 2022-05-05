//Arrays
const buttonColors = ["red", "blue", "yellow", "green"];

let gamePattern = [];
let userClickedPattern = [];

//track level
let started = false;
let level = 0;

//Function selects random color sequence and plays corresponding sound
function nextSequence() {
  userClickedPattern = [];
  level++;

  const randomNumber = Math.floor(Math.random() * 4);

  const randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $(`#${randomChosenColor}`).fadeOut(70).fadeIn(70).fadeOut(70).fadeIn(70);

  playSound(randomChosenColor);

  $("#level-title").text("level " + level);
}

//Selects button and adds click event to push color to array and play color sound
$(".btn").on("click", function (e) {
  const userChosenColor = e.target.id;

  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.length - 1);
});

//reusable function to play sound corresponding to color
function playSound(name) {
  const audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

//adding animation when user clicks
function animatePress(currentColor) {
  $(`#${currentColor}`).addClass("pressed");

  setTimeout(function () {
    $(`#${currentColor}`).removeClass("pressed");
  }, 100);
}

//restart game when any key pressed

$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

//check answer game logic
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("h1").text("Game Over, Press Any Key to Restart");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    console.log("wrong");
    startOver();
  }
}

//restart the game.

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
