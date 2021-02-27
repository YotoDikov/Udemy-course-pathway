'use strict';
// DEFINE THE HTML ELEMENTS ...

// Buttons
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');

let dice = document.querySelector('.dice');

// Players
let player1 = {
  totalScore: document.getElementById('score--0'),
  currentScore: document.getElementById('current--0'),
  myTurn: true,
  status: document.querySelector(
    'body > main > section.player.player--0.player--active'
  ),
};
let player2 = {
  totalScore: document.getElementById('score--1'),
  currentScore: document.getElementById('current--1'),
  myTurn: false,
  status: document.querySelector('body > main > section.player.player--1'),
};
console.log(player1.status);

player1.totalScore.textContent = 0;
player2.totalScore.textContent = 0;
dice.style.display = 'none';

// Display dice

// EVENT LISTENERS
newGameBtn.addEventListener('click', function () {
  player1.totalScore.textContent = 0;
  player2.totalScore.textContent = 0;
  player1.currentScore.textContent = 0;
  player2.currentScore.textContent = 0;
  if (!player1.status.classList.contains('player--active')) {
    player2.status.classList.remove('player--active');
    player1.status.classList.add('player--active');
  }
});

holdBtn.addEventListener('click', hold);
rollBtn.addEventListener('click', roll);
rollBtn.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' || e.key === 'Space') {
    roll();
  }
});

// FUNCTIONS

function currnetPlayer(p1, p2) {
  return p1.myTurn ? p1 : p2;
}
function hold() {
  let currentP = currnetPlayer(player1, player2);
  let digitScore = Number(currentP.totalScore.textContent);
  let currentDigitScore = Number(currentP.currentScore.textContent);

  digitScore += currentDigitScore;
  currentP.totalScore.textContent = digitScore;
  if (digitScore >= 100) {
    currentP.totalScore = digitScore;
    winner(currentP);
  }

  swich(player1, player2);
}

function swich(player1, player2) {
  if (player1.myTurn === true) {
    player1.currentScore.textContent = 0;
    player1.myTurn = false;
    player1.status.classList.remove('player--active');
    player2.myTurn = true;
    player2.status.classList.add('player--active');
  } else {
    player2.currentScore.textContent = 0;
    player2.myTurn = false;
    player2.status.classList.remove('player--active');
    player1.myTurn = true;
    player1.status.classList.add('player--active');
  }
}

function winner(winnerPlayer) {
  winnerPlayer.status.classList.remove('player--active');
  winnerPlayer.status.classList.add('player--winner');
  holdBtn.removeEventListener('click', hold);
  rollBtn.removeEventListener('click', hold);
}

function roll() {
  dice.style.display = 'block';
  const rolledNumber = Math.trunc(Math.random() * 6 + 1);
  let player = currnetPlayer(player1, player2);
  displayDice(rolledNumber);
  if (rolledNumber > 1) {
    player.currentScore.textContent =
      Number(player.currentScore.textContent) + rolledNumber;
  } else {
    swich(player1, player2);
  }
}

function displayDice(num) {
  return (dice.src = `dice-${num}.png`);
}
