'use strict';
// DEFINE THE HTML ELEMENTS ...

// Buttons
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');

newGameBtn.addEventListener('click', function () {
  player1.totalScore.textContent = 0;
  player2.totalScore.textContent = 0;
  if (!player1.status.classList.contains('player--active')) {
    player2.status.classList.remove('player--active');
    player1.status.classList.add('player--active');
  }
});

// const swichPlayersTurn = function (p1, p2) {
//   player.currentScore.textContent = 0;
//   player.myTurn = false;
//   nextPlayer.myTurn = true;
// };
const playerManipulation = function (player, nextPlayer) {
  const rollNumber = Math.trunc(Math.random() * 6 + 1);
  dice.src = `dice-${rollNumber}.png`;
  if (rollNumber > 1) {
    let num = Number(player.currentScore.textContent);
    num += rollNumber;
    player.currentScore.textContent = num;
  } else {
    swich(player1, player2);
  }
};

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

// Display dice
let dice = document.querySelector('.dice');

// EVENT LISTENERS
function roll() {
  if (player1.myTurn) {
    playerManipulation(player1, player2);
  } else {
    playerManipulation(player2, player1);
  }
}

rollBtn.addEventListener('click', roll);

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
holdBtn.addEventListener('click', hold);

function swich(player1, player2) {
  if (player1.myTurn === true) {
    player1.currentScore.textContent = 0;
    player1.myTurn = false;
    player1.status.classList.remove('player--active');
    player2.myTurn = true;
    player2.status.classList.add('player--active');

    console.log(true);
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
