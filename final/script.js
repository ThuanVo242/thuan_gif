'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  

  if (!guess) {
    displayMessage('Please enter a number🙄!');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number 🏆!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#00bfff';
    document.querySelector('.number').style.width = '30rem';

    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
    
  } else if (guess < secretNumber) {
    if (score > 1) {
      displayMessage('Two Low 😓!');
      document.querySelector('body').style.backgroundColor = '#ff00ff';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Game Over 😭!');
      document.querySelector('body').style.backgroundColor = '#ff4000';
      document.querySelector('.score').textContent = score;
    }
    
  } else if (guess > secretNumber){
    if (score > 1) {
      displayMessage('Two High 😓!');
      document.querySelector('body').style.backgroundColor = '#ff00ff';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Game Over 😭!');
      document.querySelector('body').style.backgroundColor = '#ff4000';
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});