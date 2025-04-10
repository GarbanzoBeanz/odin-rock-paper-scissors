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

// function playRound(humanChoice, computerChoice) {
//   if(humanChoice === 'rock') {
//     switch (computerChoice) {
//       case 'Rock':
//         console.log('We both chose rock, we tie this round!');
//         break;
//       case 'Paper':
//         console.log('Paper beats rock, you lose this round!');
//         ++computerScore;
//         break;
//       case 'Scissors':
//         console.log('Rock beats scissors, you win this round!');
//         ++humanScore;
//         break;
//     }
//   } else if(humanChoice === 'paper') {
//     switch (computerChoice) {
//       case 'Rock':
//         console.log('Paper beats rock, you win this round!');
//         ++humanScore;
//         break;
//       case 'Paper':
//         console.log('We both chose paper, we tie this round!');
//         break;
//       case 'Scissors':
//         console.log('Scissors beats paper, you lose this round!');
//         ++computerScore;
//         break;
//     }
//   } else if(humanChoice === 'scissors') {
//     switch (computerChoice) {
//       case 'Rock':
//         console.log('Rock beats scissors, you lose this round!');
//         ++computerScore;
//         break;
//       case 'Paper':
//         console.log('Scissors beats paper, you win this round!');
//         ++humanScore;
//         break;
//       case 'Scissors':
//         console.log('We both chose scissors, we tie this round!');
//         break;
//     }
//   } else {
//     console.log('Invalid input. Please type rock, paper, or scissors.');
//   }
// }

// function playGame() {
//   while (humanScore < 3 && computerScore < 3) {
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     playRound(humanSelection, computerSelection);
//     console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
//   }

//   if (humanScore === 3) {
//     console.log('You won the game!');
//   } else {
//     console.log('You lost the game!');
//   }
// }

// playGame();
