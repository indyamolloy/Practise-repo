//Arrays
const buttonColors = ["red", "blue", "yellow", "green"];

const gamePattern = [];
const userClickedPattern = [];

//track level
let level = 0;

//Function selects random color sequence and plays corresponding sound
function nextSequence() {
  const randomNumber = Math.floor(Math.random() * 4);

  const randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $(`#${randomChosenColor}`).fadeOut(70).fadeIn(70).fadeOut(70).fadeIn(70);

  playSound(randomChosenColor);

  level++;
}

//Selects button and adds click event to push color to array and play color sound
$(".btn").on("click", function (e) {
  const userChosenColor = e.target.id;

  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
  animatePress(userChosenColor);

  checkAnswer(userClickedPattern[userClickedPattern.length - 1]);
});

//reusable function to play sound corresponding to color
function playSound(name) {
  const audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

//adding animation when user clicks
function animatePress(currentColor) {
  $(`.${currentColor}`).addClass("pressed");

  setTimeout(function () {
    $(`.${currentColor}`).removeClass("pressed");
  }, 100);
}

//restart game when any key pressed

$(document).on("keypress", function () {
  nextSequence();
  $("h1").text(`Level ${level}`);
});

//check answer game logic
function checkAnswer(currentLevel) {
  console.log(currentLevel.length);
  if (currentLevel === gamePattern[gamePattern.length - 1]) {
    console.log("success");
  } else {
    console.log("wrong");
  }
}
