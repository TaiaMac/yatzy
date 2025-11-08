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
  dice: [1, 1, 1, 1, 1],      // current dice values
  held: [false, false, false, false, false], // whether each die is held
  rollsLeft: 3,                // rolls remaining for the player
  scores: {},                  // score categories (optional)
  message: "Welcome to Yatzy!",
};

// ROUTES / API ENDPOINTS
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
    gameState.message = "No rolls lef, please start a new round.";
  }

  res.json(gameState);
});

// POST /hold - toggles the “held” state of a die
app.post("/hold", (req, res) => {
  const { index } = req.body; // example: { "index": 2 }
  if (index >= 0 && index < 5) {
    gameState.held[index] = !gameState.held[index];
    gameState.message = `Toggled hold for die #${index + 1}`;
  }
  res.json(gameState);
});

// POST /newgame - resets everything
app.post("/newgame", (req, res) => {
  gameState = {
    dice: [1, 1, 1, 1, 1],
    held: [false, false, false, false, false],
    rollsLeft: 3,
    scores: {},
    message: "New game started!",
  };
  res.json(gameState);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
