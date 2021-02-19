// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [
//   [3, 5, 1],
//   [9, 0, 5],
// ];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp

// 2) Breaking up into sub-problems
// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it
// const oneArraywithTemp = temperatures[0].concat(temperatures[1]);

// function calcAmplitude(arr1, arr2) {
//   let min = Number(oneArraywithTemp[0]);
//   let max = Number(oneArraywithTemp[0]);

//   for (let i = 0; i < oneArraywithTemp.length; i++) {
//     let element = Number(oneArraywithTemp[i]);

//     if (element >= max && typeof element === 'number') {
//       max = element;
//     }

//     if (element <= min && typeof element === 'number') {
//       min = element;
//     }
//   }

//   return max - min;
// }

// console.log(calcAmplitude(min, max));

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

// console.log(calcAmplitude(temperatures[0], temperatures[1]));
// console.log(oneArraywithTemp);

const measureKelcin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    //C) FIX
    value: Number(prompt('Degrees celsius:')), // when we call prompt, it always return a string value.
  };
  // B) FIND
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelcin());
