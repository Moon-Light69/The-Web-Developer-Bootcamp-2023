const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");

const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const winningScoreSelect = document.querySelector("#playto");

let p1Score = 0;
let p2Score = 0;
let winningScore = winningScoreSelect;
// let isbaziTamamNashode = false;

let baziTamamNashode = true;

p1Button.addEventListener("click", function () {
  if (baziTamamNashode) {
    p1Score += 1;
    if (p1Score === winningScore) {
      baziTamamNashode = false;
      p1Display.classList.add("winner");
      p2Display.classList.add("loser");

      p1Button.disabled = true;
      p2Button.disabled = true;
      
    }
  }
  p1Display.textContent = p1Score;
});

p2Button.addEventListener("click", function () {
  if (baziTamamNashode) {
    p2Score += 1;
    if (p2Score === winningScore) {
      baziTamamNashode = false;
      p2Display.classList.add("winner");
      p1Display.classList.add("loser");

      p1Button.disabled = true;
      p2Button.disabled = true;
    }
  }
  p2Display.textContent = p2Score;
});

// p1Button.addEventListener("click", function () {
//   if (!isbaziTamamNashode) {
//     p1Score += 1;
//     if (p1Score === winningScore) {
//       isbaziTamamNashode = true;
//       p1Display.classList.add("winner");
//       p2Display.classList.add("loser");

//       p1Button.disabled = true
//       p2Button.disabled = true
//     }
//     p1Display.textContent = p1Score;
//   }
// });

// p2Button.addEventListener("click", function () {
//   if (!isbaziTamamNashode) {
//     p2Score += 1;
//     if (p2Score === winningScore) {
//       isbaziTamamNashode = true;
//       p2Display.classList.add("winner");
//       p1Display.classList.add("loser");

//       p1Button.disabled = true
//       p2Button.disabled = true
//     }
//     p2Display.textContent = p2Score;
//   }
// });

winningScoreSelect.addEventListener("input", function () {
  winningScoreSelect = parseInt(this.value);
  reset();
});

resetButton.addEventListener("click", reset());

function reset() {
  baziTamamNashode = true;

  p1Score = 0;
  p2Score = 0;

  p1Display.textContent = 0;
  p2Display.textContent = 0;

  p1Display.classList.remove("winner", "loser");
  p2Display.classList.remove("winner", "loser");

  p1Button.disabled = false;
  p2Button.disabled = false;
}
