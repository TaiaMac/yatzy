import YatzyGame from './yatzyGame.js';

window.addEventListener('DOMContentLoaded', () => {
  window._yatzy = new YatzyGame();
  getState(); // load current state from server
});

// Update the UI
function updateUI(state){
  document.querySelector("#message").textContent = state.message;
  document.querySelector("#rolls-left").textContent = `Rolls left: ${state.rollsLeft}`;
  document.querySelector("#round-info").textContent = `Round: ${state.currentRound}/13`;

  state.dice.forEach((value,i)=>{
    const die = document.querySelector(`#die-${i+1}`);
    die.textContent = value;
    die.classList.toggle("held", state.held[i]);
  });

  // Optional: update scoreboard if you have score elements
  for(const key in state.scores){
    const el = document.getElementById(key);
    if(el) el.textContent = state.scores[key];
  }
}

// API CALLS
async function getState(){
  const res = await fetch("http://localhost:3000/state");
  const data = await res.json();
  updateUI(data);
}

async function rollDice(){
  const res = await fetch("http://localhost:3000/roll", {method:"POST"});
  const data = await res.json();
  updateUI(data);
}

async function holdDie(index){
  const res = await fetch("http://localhost:3000/hold", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({index})
  });
  const data = await res.json();
  updateUI(data);
}

async function nextRound(){
  const res = await fetch("http://localhost:3000/next-round",{method:"POST"});
  const data = await res.json();
  updateUI(data);
}

async function newGame(){
  const res = await fetch("http://localhost:3000/newgame",{method:"POST"});
  const data = await res.json();
  updateUI(data);
}

// BUTTON EVENT LISTENERS
document.querySelector("#roller").addEventListener("click", rollDice);
document.querySelector("#endTurnBtn").addEventListener("click", nextRound);
document.querySelector("#newGameBtn").addEventListener("click", newGame);
document.querySelectorAll(".die").forEach((die,i)=>{
  die.addEventListener("click",()=>holdDie(i));
});

// SCORING BUTTONS
async function submitScore(category) {
  const res = await fetch("http://localhost:3000/score", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ category })
  });
  const data = await res.json();
  updateUI(data);
}

document.querySelectorAll(".score-btn").forEach(btn => {
  btn.addEventListener("click", () => submitScore(btn.dataset.category));
});
