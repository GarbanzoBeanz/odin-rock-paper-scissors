'use strict'


let randomNumber = getRandomInt();

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