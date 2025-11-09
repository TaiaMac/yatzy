
## Yatzy Game - Assignment #2
## Overview
    - This version of the Yatzy game builds on Assignment 1 but now integrates Node.js and Express for server-side game state management.
    - The client (browser) now focuses on displaying and interacting with the game, while all core logic (rolling, holding dice, scoring, and game progression) is handled on the server through RESTful API endpoints.

## Features
    - Roll five dice up to three times per round
    - Click on dice to hold or release them between rolls
    - Automatically calculates scores for all categories:
        - Ones – Sixes
        - Three/Four of a Kind
        - Full House, Small Straight, Large Straight
        - Chance and Yatzy
    - Game auto-saves in localStorage (resume anytime)
    - Displays final score and overlay message after 13 rounds
    - Server-side dice rolls, scoring, and state management
    - Client-side interface communicates using fetch() requests
    - Responsive, accessible UI (desktop + mobile)
    - RESTful API structure (GET/POST endpoints)
    - Persistent game state across requests

## Technologies Used
    - Frontend: HTML, CSS (Flexbox/Grid), JavaScript (ES6)
    - Backend: Node.js, Express
    - Version Control: Git + GitHub
    - Testing: Localhost (http://localhost:3000)

## Client–Server Flow
    - The client (main.js) sends requests to the Express server:
        - GET /state → Fetch current game state
        - POST /roll → Roll all unheld dice
        - POST /hold → Toggle hold on a specific die
        - POST /next-round → Move to next round
        - POST /newgame → Reset game
    - The server (server.js) manages all game logic:
        - Tracks dice values, scores, rounds, and holds
        - Calculates results for categories (Full House, Straights, Yatzy, etc.)
        - Sends JSON responses back to update the UI
    - The client (updateUI()) renders everything dynamically based on the server’s response.

## Controls
    - Roll Dice     (Roll all unheld dice)
    - Click a die	(Hold / release that die)
    - End Turn	    (Save score and advance round)
    - New Game	    (Reset all rounds and scores)
    
## Accessibility
    - High-contrast colors and large interactive areas
    - Focus states for keyboard users
    - Semantic HTML and ARIA labels for screen readers

## Responsive Design
    - CSS Grid and Flexbox layout 
    - Scales correctly on phones and tablets
    - Buttons and dice reposition vertically on narrow screens

## File Structure
yatzy (npx serve)
    index.html          # Main structure and layout
    yatzy_dice.css      # Styling, responsive layout, dice animation
    dice.js             # Dice utility class
    yatzyEngine.js      # Core scoring and game logic
    yatzyGame.js        # UI logic, event handling, save/load, overlays
    main.js             # Handles UI + Fetch API calls
    server.js           # Express backend (NEW)
    package.json        # npm dependencies (express, cors, nodemon)
    README.md           # Project documentation

## Design Notes
## Color Palette
    - Background: #811212d2 (deep red tone)
    - Cards/Containers: #000000aa (semi-transparent black)
    - Accent: #dd9802 (gold)
    - Muted Text: #9ea4b1c6

## Typography
    Headings: Arial Bold
    Body: Calibri / Inter
    Style: Clean, bold, game-like contrast

## Dice
    - White, rounded-edge 3D dice
    - Black pips arranged in authentic Yatzy positions
    - Rolling animation for realism

## Testing
    - Verified all API routes return valid JSON responses
    - Tested all game actions (roll, hold, next round, new game)
    - Checked consistent UI updates and correct score logic

## Developer
Taia Maclaurin
CST3106 Assignment 2
Single-Player Yatzy Game Enhancement with Node.js + Express

## References
    - https://getbootstrap.com 
    - https://github.com/peippo/yahtzee 
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript
    - OpenAI(2025) ChatGPT Retrieved October 20 2025 from https://chat.openai.com
    - https://github.com/dsmcclain
    - in class lectures