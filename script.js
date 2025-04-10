'use strict'

// --- SCREEN SELECTORS --- //
const startScreen = document.querySelector('.start-container');
const mainScreen = document.querySelector('.main-container');


// --- COMPONENT SELECTORS --- //
const startBtn = document.querySelector('.start-btn');
const choiceButtons = document.querySelectorAll('[data-choice]');

const userScoreEl = document.querySelector('#user-score');
const computerScoreEl = document.querySelector('#computer-score');
const battleLog = document.querySelector('#round-result');

// --- INITIALIZER --- //
let userScore = 0;
let computerScore = 0;
userScoreEl.textContent = `Player Score: ${userScore}`;
computerScoreEl.textContent = `Computer Score: ${computerScore}`;

// --- DECLERATIONS --- //
let round = 1;

const attackVerbs = {
  rock: ['smashed', 'crushed', 'broke'],
  paper: ['wrapped', 'smothered', 'covered'],
  scissors: ['cut', 'sliced', 'shredded']
};

const defenseVerbs = {
  rock: ['defense', 'counter', 'stance'],
  paper: ['strategy', 'attack', 'plan'],
  scissors: ['offense', 'guard', 'move']
};
// --- EVENT LISTENERS --- //
const startGameBtn = document.addEventListener('click', () => {
  startScreen.classList.add('hide');
  mainScreen.classList.remove('hide');
});

// --- GAME FUNCTIONS --- //
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[getRandomInt(choices.length)];
};

const userChoiceIndex = (userChoice) => {
  switch (userChoice) {
    case 'rock' : 0
    break;

    case 'paper': 1
    break;

    case 'scissors': 2
    break;

    default:
      (console.log("userChoiceIndex is broken!"))
  }
}

const computerChoiceIndex = (computerChoice) => {
  switch (computerChoice) {
    case 'rock' : 0
    break;

    case 'paper': 1
    break;

    case 'scissors': 2
    break;

    default:
      (console.log("computerChoiceIndex is broken!"))
  }
}

const playRound = (userChoice, computerChoice) => {
  if(userChoice === computerChoice) {
    battleLog.appendChild(`<li>ROUND ${round}: Both fighters stood `
      + `firm with ${userChoice}. No one wins this round!</li>`)

    round++

  } else if((userChoice === 'rock' && computerChoice === 'scissors')
    || (userChoice === 'paper' && computerChoice === 'rock')
    || (userChoice === 'scissors' && computerChoice === 'paper')){
    battleLog.appendChild(`<li>ROUND ${round}: `
      + `The Player\’s ${userChoice} `
      + `${attackVerbs[userChoiceIndex(userChoice)]} `
      + `the Computer’s ${computerChoice} `
      + `${defenseVerbs[computerChoiceIndex(computerChoice)]}.`
      + `The Player wins!</li>`)
    
      round++
      userScore++

  } else if((computerChoice === 'rock' && userChoice === 'scissors')
  || (computerChoice === 'paper' && userChoice === 'rock')
  || (computerChoice === 'scissors' && userChoice === 'paper')) {
    battleLog.appendChild(`<li>ROUND ${round}: `
      + `The Computer\’s ${computerChoice} `
      + `${attackVerbs[computerChoiceIndex(computerChoiceChoice)]} `
      + `the Players’s ${userChoice} `
      + `${defenseVerbs[userChoiceIndex(userChoice)]}.`
      + `The Player wins.</li>`)
  } else {
    console.log('playRound is broken');
  }
};