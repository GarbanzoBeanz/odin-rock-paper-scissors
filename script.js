'use strict'

let humanScore = 0;
let computerScore = 0;

function getRandomInt(max) {
  return Math.floor((Math.random() * 3) + 1);
}

function getComputerChoice() {
  const randomNumber = getRandomInt();
  if(randomNumber == 1) {
    return "Rock";
  } else if(randomNumber == 2) {
    return "Paper";
  } else if (randomNumber == 3) {
    return "Scissors";
  } else {
    return 'Something\'s Broken';
  }
}

function getHumanChoice() {
  let answer = prompt("Rock, Paper or Scissors?").toLowerCase();
  return answer;
}

function playRound(humanChoice, computerChoice) {
  if(humanChoice === 'rock') {
    switch (computerChoice) {
      case 'Rock':
        console.log('We both chose rock, we tie this round!');
        break;
      case 'Paper':
        console.log('Paper beats rock, you lose this round!');
        ++computerScore;
        break;
      case 'Scissors':
        console.log('Rock beats scissors, you win this round!');
        ++humanScore;
        break;
    }
  } else if(humanChoice === 'paper') {
    switch (computerChoice) {
      case 'Rock':
        console.log('Paper beats rock, you win this round!');
        ++humanScore;
        break;
      case 'Paper':
        console.log('We both chose paper, we tie this round!');
        break;
      case 'Scissors':
        console.log('Scissors beats paper, you lose this round!');
        ++computerScore;
        break;
    }
  } else if(humanChoice === 'scissors') {
    switch (computerChoice) {
      case 'Rock':
        console.log('Rock beats scissors, you lose this round!');
        ++computerScore;
        break;
      case 'Paper':
        console.log('Scissors beats paper, you win this round!');
        ++humanScore;
        break;
      case 'Scissors':
        console.log('We both chose scissors, we tie this round!');
        break;
    }
  } else {
    console.log('Invalid input. Please type rock, paper, or scissors.');
  }
}

function playGame() {
  while (humanScore < 3 && computerScore < 3) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
  }

  if (humanScore === 3) {
    console.log('🎉 You won the game!');
  } else {
    console.log('💻 You lost the game!');
  }
}

playGame();
