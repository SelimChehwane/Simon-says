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
    clickAnimation(id);
  });
});

function clickAnimation(id) {
    let element = document.getElementById(id);
    element.classList.add("pressed");
    setTimeout(() => {
      element.classList.remove("pressed");
    }, 100);
  }

  