
## Yatzy Game - Assignment #1
## Overview
    - This is a single-player Yatzy (Yahtzee) game developed for CST3106 Assignment 1 using HTML, CSS, and JavaScript.
    - The project implements full Yatzy rules, responsive design, score tracking, and persistent game state.

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
    - Responsive and accessible layout for desktop and mobile

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
yatzy
    index.html          # Main structure and layout
    yatzy_dice.css      # Styling, responsive layout, dice animation
    dice.js             # Dice utility class
    yatzyEngine.js      # Core scoring and game logic
    yatzyGame.js        # UI logic, event handling, save/load, overlays
    main.js             # Entry point to initialize the game
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
    - Verified in Chrome and Edge
    - Tested responsiveness at 320 px – 1200 px
    - Confirmed save/load persistence across sessions

## Developer
Taia Maclaurin
CST3106 Assignment 1
Single-Player Yatzy Game Development (JS)