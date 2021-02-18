// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [
  [1, 2, 3, 4],
  [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5],
];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp

// 2) Breaking up into sub-problems
// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it
const oneArraywithTemp = temperatures.join(',').split(',');

let min = Number(oneArraywithTemp[0]);
let max = Number(oneArraywithTemp[0]);

function calcAmplitude(min, max) {
  for (let i = 0; i < oneArraywithTemp.length; i++) {
    let element = Number(oneArraywithTemp[i]);

    if (element >= max && typeof element === 'number') {
      max = element;
    }

    if (element <= min && typeof element === 'number') {
      min = element;
    }
  }

  return max - min;
}

// console.log(calcAmplitude(min, max));

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

console.log(calcAmplitude(min, max));
// console.log(oneArraywithTemp);
