const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;

document.addEventListener("keypress", () => {
    if (!started) {
      alert("Start game")
      started = true;
    }
  });
