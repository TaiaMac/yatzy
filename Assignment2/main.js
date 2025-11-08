// main.js
import YatzyGame from './yatzyGame.js';

window.addEventListener('DOMContentLoaded', () => {
  // instantiate the game controller which wires engine + UI
  window._yatzy = new YatzyGame();
});

// Helper: update UI from game state
function updateUI(state) {
  // You can update the DOM however your game does it
  document.querySelector("#message").textContent = state.message;
  document.querySelector("#rolls-left").textContent = state.rollsLeft;

  state.dice.forEach((value, i) => {
    const die = document.querySelector(`#die-${i + 1}`);
    die.textContent = value; // or update die image
    die.classList.toggle("held", state.held[i]);
  });
}

// ==========================
// FETCH FUNCTIONS (API CALLS)
// ==========================

// Get current state
async function getState() {
  const res = await fetch("http://localhost:3000/state");
  const data = await res.json();
  updateUI(data);
}

// Roll dice
async function rollDice() {
  const res = await fetch("http://localhost:3000/roll", {
    method: "POST",
  });
  const data = await res.json();
  updateUI(data);
}

// Hold or unhold a die
async function holdDie(index) {
  const res = await fetch("http://localhost:3000/hold", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ index }),
  });
  const data = await res.json();
  updateUI(data);
}

// Start a new game
async function newGame() {
  const res = await fetch("http://localhost:3000/newgame", {
    method: "POST",
  });
  const data = await res.json();
  updateUI(data);
}
