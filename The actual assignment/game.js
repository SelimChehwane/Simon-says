const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;

document.addEventListener("keypress", () => {
  if (!started) {
    document.querySelector("#level-title").textContent = `Level ${level}`;
    gameSequence();
    started = true;
  }
});

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", function (event) {
    let id = event.target.id;
    userClickedPattern.push(id);
    clickAnimation(id);
    playAudio(id);
    checkAnswer(userClickedPattern.length - 1);
  });
});

function clickAnimation(id) {
  let element = document.getElementById(id);
  element.classList.add("pressed");
  setTimeout(() => {
    element.classList.remove("pressed");
  }, 100);
}

function playAudio(color) {
  let relPath = `sounds/${color}.mp3`;
  let audio = new Audio(relPath);
  audio.play();
}
function gameSequence() {
  level++;
  userClickedPattern = [];
  let rand = Math.floor(Math.random() * 4);
  let color = buttonColors[rand];
  gamePattern.push(color);
  clickAnimation(color);
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(() => {
        gameSequence();
      }, 1000);
    }
  } else {
    document.getElementById("level-title").textContent = "Game Over";
    document.body.classList.add("game-over");
    setTimeout(() => {
      document.body.classList.remove("game-over");
    }, 200);

    let audio = new Audio("sounds/wrong.mp3");
    audio.play();

    startOver();
  }
}
