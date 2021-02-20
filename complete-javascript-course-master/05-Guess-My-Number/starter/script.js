'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let number = Math.trunc(Math.random() * 20 + 1);
console.log(number);

let message = document.querySelector('.message');
let scoreCounter = document.querySelector('.score');
let highScore = document.querySelector('.highscore');
let currentScore;

document.querySelector('.check').addEventListener('click', function () {
  let guessNum = document.querySelector('.guess').value;
  if (guessNum < number) {
    message.textContent = '📉 Too low!';
    scoreCounter.textContent -= 1;
  } else if (guessNum > number) {
    message.textContent = '📈 Too high!';
    scoreCounter.textContent -= 1;
  } else {
    message.textContent = '🎉 Correct Number';
    document.querySelector('.number').textContent = guessNum;
    document.querySelector('.number').style.width = '30rem';
    document.body.style.backgroundColor = '#60b347';
    currentScore = scoreCounter.textContent;
    if (Number(currentScore) > Number(highScore.textContent)) {
      highScore.textContent = currentScore;
    }
  }
});

// const btnAgain = document.querySelector('body > header > button');
// console.log(btnAgain);

document
  .querySelector('body > header > button')
  .addEventListener('click', function () {
    message.textContent = 'Start guessing...';
    scoreCounter.textContent = 20;
    document.querySelector('.number').style.width = '15rem';
    document.body.style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    number = Math.trunc(Math.random() * 20 + 1);
    console.log(number);
  });
