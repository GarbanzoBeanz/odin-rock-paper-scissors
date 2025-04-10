'use strict'

// --- SCREEN SELECTORS --- //
const startScreen = document.querySelector('.start-container');
const mainScreen = document.querySelector('.main-container');


// --- COMPONENT SELECTORS --- //
const startBtn = document.querySelector('.start-btn');
const choiceButtons = document.querySelectorAll('[data-choice]');

const userScoreEl = document.querySelector('#user-score');
const computerScoreEl = document.querySelector('#computer-score');

// --- INITIALIZER --- //
let userScore = 0;
let computerScore = 0;
userScoreEl.textContent = `Player Score: ${userScore}`;
computerScoreEl.textContent = `Computer Score: ${computerScore}`;

// --- EVENT LISTENERS --- //
const startGameBtn = document.addEventListener('click', () => {
  startScreen.classList.add('hide');
  mainScreen.classList.remove('hide');
});

// --- GAME FUNCTIONS --- //
function getRandomInt(max) {
  return Math.floor((Math.random() * 3) + 1);
}


function getComputerChoice() {
  const randomNumber = getRandomInt();
  if(randomNumber == 1) {
    return "rock";
  } else if(randomNumber == 2) {
    return "paper";
  } else if (randomNumber == 3) {
    return "scissors";
  } else {
    return 'Somthing\'s Wrong!';
  }
}

