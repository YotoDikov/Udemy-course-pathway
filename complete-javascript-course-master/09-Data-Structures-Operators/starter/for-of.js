'use strict';

const person = {
  names: ['Pesho', 'Petrov', 'Pichagata'],
};
const names = person.names;

for (const name of names) console.log(name); //  Pesho \n Petrov \n Pichagata

for (const item of names.entries()) console.log(item); // (2) [0, "Pesho"] \n (2) [1, "Petrov"] \n (2) [2, "Pichagata"]

console.log([...names.entries()]); // [[0, "Pesho"],  [1, "Petrov"],  [2, "Pichagata"]]

///////////////////// destructuring in for of ////////////////

for (const [i, el] of names.entries()) {
  console.log(`${i + 1}: ${el}`); // 1: Pesho \n 2: Petrov \n 3: Pichagata
}
