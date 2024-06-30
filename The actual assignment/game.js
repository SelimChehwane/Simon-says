const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;

document.addEventListener("keypress", () => {
  if (!started) {
    document.querySelector("#level-title").textContent = `Level ${level}`;
    started = true;
  }
});

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", function (event) {
    let id = event.target.id;
    userClickedPattern.push(id);
    clickAnimation(id);
    playAudio(id);
    gameSequence();
    alert(gamePattern)
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
    let rand = Math.floor(Math.random() * 4);
  let color = buttonColors[rand];
  gamePattern.push(color);
  clickAnimation(color);

  }

