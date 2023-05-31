"use strict";

// Selecting elements
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const diceImage = document.querySelector(".dice");
const newGameBtn = document.querySelector(".btn--new")
const holdDiceBtn = document.querySelector(".btn--hold")
const rollDiceBtn = document.querySelector(".btn--roll")

// Starting conditions
score0.textContent = 0;
score1.textContent = 0;
diceImage.classList.add("hidden")

// Rolling the dice
