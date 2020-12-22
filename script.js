'use strict';

let numberGuessed;
let scoreDisplay = 20;
let highscoreDisplay = 0;
let correctAnswer = Math.floor(Math.random() * 20) + 1;
console.log(correctAnswer);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Check button
document.querySelector('.btncheck').addEventListener('click', function () {
  numberGuessed = Number(document.querySelector('.guess').value);
  //   console.log(numberGuessed);

  //When no number is entered
  if (numberGuessed == 0) {
    displayMessage('❎ No number entered');
  }

  //Guess is different from correct number
  else if (numberGuessed != correctAnswer) {
    if (scoreDisplay > 1) {
      displayMessage(
        numberGuessed > correctAnswer ? '⬆️ Too high' : '⬇️ Too low'
      );
      scoreDisplay = scoreDisplay - 1;
      document.querySelector('.score').textContent = String(scoreDisplay);
    } else {
      displayMessage('🥴 You Lost');
      document.querySelector('.score').textContent = '0';
      //changing color to red upon wrong answer
      document.querySelector('body').style.backgroundColor = '#CD3131';
    }
  }

  ////If the guessed number is equal than the required number
  else {
    displayMessage('🥳 CORRECT ANSWER');
    document.querySelector('.number').textContent = numberGuessed;
    document.querySelector('.number').style.width = '30rem';
    highscoreDisplay = Number(document.querySelector('.highscore').textContent);
    if (highscoreDisplay > scoreDisplay) {
      document.querySelector('.highscore').textContent = String(
        highscoreDisplay
      );
    } else {
      document.querySelector('.highscore').textContent = String(scoreDisplay);
    }
    //changing color to green upon correct answer
    document.querySelector('body').style.backgroundColor = '#60b347';
  }
});

//Again button
document.querySelector('.btnagain').addEventListener('click', function () {
  correctAnswer = Math.trunc(Math.random() * 20) + 1;
  console.log(correctAnswer);
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  scoreDisplay = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
