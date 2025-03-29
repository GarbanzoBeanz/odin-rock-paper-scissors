'use strict'

let randomNumber = getRandomInt();
let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function getRandomInt(max) {
  return Math.floor((Math.random() * 3) + 1)
};

function getComputerChoice() {
  if(randomNumber == 1) {
    return "Rock"
  } else if(randomNumber == 2) {
    return "Paper";
  } else if (randomNumber == 3) {
    return "Scissors";
  } else {
    return 'Something\'s Broken';
  }
};

function getHumanChoice() {
  let answer = prompt("Rock, Paper or Scissors?").toLowerCase();
  return answer;
};

function playRound(humanChoice, computerChoice) {
  if(humanChoice == 'rock') {
    switch (computerChoice) {
      case 'Rock':
        console.log('We both chose rock, we tie!');
        break;
      case 'Paper':
        console.log('Paper beats rock, you lose!');
        ++computerScore;
        break;
      case 'Scissors':
        console.log('Rock beats scissors, you win!');
        ++humanScore
        break;
      default:
        console.log('Something went wrong!!');
    };
  } else if(humanChoice == 'paper') {
    switch (computerChoice) {
      case 'Rock':
        console.log('Paper beats rock, you win!');
        ++humanScore
        break;
      case 'Paper':
        console.log('We both chose paper, we tie!');
        break;
      case 'Scissors':
        console.log('Scissors beats paper, you lose!');
        ++computerScore;
        break;
      default:
        console.log('Something went wrong!!');
    };
  } else if(humanChoice == 'scissors') {
      switch (computerChoice) {
        case 'Rock':
          console.log('Rock beats scissors, you lose!');
          ++computerScore;
          break;
        case 'Paper':
          console.log('Scissors beats paper, you win!');
          ++humanScore
          break;
        case 'Scissors':
          console.log('We both chose Scissors, we tie!');
          break;
        default:
          console.log('Something went wrong!!');
      };
    } else {
      console.log('something is broken');
    }
};
