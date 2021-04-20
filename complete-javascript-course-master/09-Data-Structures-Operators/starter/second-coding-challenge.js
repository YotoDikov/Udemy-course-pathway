'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
for (const [i, goalMaster] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${goalMaster}`);
}

// 2
const allOdds = Object.values(game.odds);

let result = 0;
for (const el of allOdds) {
  result += el;
}
console.log(result / 3);

//3
for (const [team, odd] of Object.entries(game.odds)) {
  const addStr = team === 'x' ? 'Draw' : `victory ${game[team]}`;
  console.log(`Odd of ${addStr}: ${odd}`);
}

// 4
const scorers = {};

for (const player of game.scored) {
  !scorers[player] ? (scorers[player] = 1) : (scorers[player] += 1);
}

console.log(scorers);
