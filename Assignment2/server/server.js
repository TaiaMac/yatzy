
// Import required modules
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

// Allow JSON requests and cross-origin access
app.use(cors());
app.use(express.json());

// Game state stored on server
let gameState = {
  dice: [1, 1, 1, 1, 1],
  held: [false, false, false, false, false],
  rollsLeft: 3,
  scores: {},
  currentRound: 1,
  message: "Welcome to Yatzy!",
};

// API ENDPOINTS
// GET /state - returns current game state
app.get("/state", (req, res) => {
  res.json(gameState);
});

// POST /roll - rolls dice that are not held
app.post("/roll", (req, res) => {
  if (gameState.rollsLeft > 0) {
    for (let i = 0; i < 5; i++) {
      if (!gameState.held[i]) {
        gameState.dice[i] = Math.floor(Math.random() * 6) + 1;
      }
    }
    gameState.rollsLeft--;
    gameState.message = `You rolled! ${gameState.rollsLeft} rolls left.`;
  } else {
    gameState.message = "No rolls left, please score or start a new round.";
  }

  res.json(gameState);
});

// POST /hold - toggles the “held” state of a die
app.post("/hold", (req, res) => {
  const { index } = req.body;
  if (index >= 0 && index < 5) {
    gameState.held[index] = !gameState.held[index];
    gameState.message = `Toggled hold for die #${index + 1}`;
  }
  res.json(gameState);
});

//NEW: POST /score - calculates and saves category score
app.post("/score", (req, res) => {
  const { category } = req.body;
  const dice = gameState.dice;
  let score = 0;

  switch (category) {
    case "ones":
      score = dice.filter(v => v === 1).length * 1;
      break;
    case "twos":
      score = dice.filter(v => v === 2).length * 2;
      break;
    case "threes":
      score = dice.filter(v => v === 3).length * 3;
      break;
    case "chance":
      score = dice.reduce((a, b) => a + b, 0);
      break;
    default:
      score = 0;
  }

  gameState.scores[category] = score;
  gameState.message = `Scored ${score} points for ${category}`;
  gameState.rollsLeft = 3;
  gameState.held = [false, false, false, false, false];
  gameState.currentRound++;
  res.json(gameState);
});

// POST /newgame - resets everything
app.post("/newgame", (req, res) => {
  gameState = {
    dice: [1, 1, 1, 1, 1],
    held: [false, false, false, false, false],
    rollsLeft: 3,
    scores: {},
    currentRound: 1,
    message: "New game started!",
  };
  res.json(gameState);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
