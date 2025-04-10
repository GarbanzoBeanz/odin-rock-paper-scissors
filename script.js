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
let round = 1;
userScoreEl.textContent = `Player Score: ${userScore}`;
computerScoreEl.textContent = `Computer Score: ${computerScore}`;

// --- DECLERATIONS --- //
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

/* for whatever button the user pressed
add an event listener for clicks that
stores the player choice
stores the computer choice
plays a round using player and computer choice
updates the score
checks if the game is over */

choiceButtons.forEach(button => {
  button.addEventListener('click', () => {
    const userChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();
    playRound(userChoice, computerChoice);
  })
})

// --- GAME FUNCTIONS --- //
const randomFromArray = (arr) => arr[Math.floor(Math.random() * arr.length)];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[getRandomInt(choices.length)];
};

const playRound = (userChoice, computerChoice) => {
  if(userChoice === computerChoice) {
    
    const list = document.createElement('li');
    list.textContent = `ROUND ${round}: Both fighters stood `
      + `firm with ${userChoice}. No one wins this round!`;

    battleLog.appendChild(list);
    round++

  } else if((userChoice === 'rock' && computerChoice === 'scissors')
    || (userChoice === 'paper' && computerChoice === 'rock')
    || (userChoice === 'scissors' && computerChoice === 'paper')){

      const attack = randomFromArray(attackVerbs[userChoice]);
      const defense = randomFromArray(defenseVerbs[computerChoice]);

      const list = document.createElement('li')
      list.textContent = `ROUND ${round}: The Player’s ${userChoice} ${attack} `
       + `the Computer’s ${computerChoice} ${defense}. The Player wins!`;   
      battleLog.appendChild(list);

      round++;
      userScore++;


  } else if((computerChoice === 'rock' && userChoice === 'scissors')
    || (computerChoice === 'paper' && userChoice === 'rock')
    || (computerChoice === 'scissors' && userChoice === 'paper')) {

      const attack = randomFromArray(attackVerbs[userChoice]);
      const defense = randomFromArray(defenseVerbs[computerChoice]);
      
      const list = document.createElement('li')
      list.textContent = `ROUND ${round}: The Computer’s ${computerChoice} ${attack} `
        + `the Player’s ${userChoice} ${defense}.The Computer wins.`;
      battleLog.appendChild(list);

      round++;
      computerScore++;

  } else {
    console.log('playRound is broken');
  }
};