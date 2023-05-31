"use strict";

// Player/Score elements
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const current0 = document.querySelector("#current--0");
const current2 = document.querySelector("#current--1");

// Dice/Game elements
const diceImage = document.querySelector(".dice");
const newGameBtn = document.querySelector(".btn--new");
const holdDiceBtn = document.querySelector(".btn--hold");
const rollDiceBtn = document.querySelector(".btn--roll");

// Starting conditions
score0.textContent = 0;
score1.textContent = 0;
diceImage.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling the dice
rollDiceBtn.addEventListener("click", function () {
  // Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // Display the dice
  diceImage.classList.remove("hidden");
  diceImage.src = `images/dice-${dice}.png`;

  // Check if someone has rolled a one
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch player
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
  }
});
