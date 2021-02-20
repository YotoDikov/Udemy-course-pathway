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

// const measureKelcin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',

//     //C) FIX
//     // value: Number(prompt('Degrees celsius:')), // when we call prompt, it always return a string value.
//     value: 10,
//   };
//   // B) FIND
//   console.table(measurement);

//   // console.log(measurement.value);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// // A) IDENTIFY
// console.log(measureKelcin());
// // using a debugger

// const calcAmplitude = function (arr1, arr2) {
//   const oneArraywithTemp = arr1.concat(arr2);
//   let min = 0;
//   let max = 0;

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
// };
// const amplitudeBug = calcAmplitude([3, 5, 1], [9, 4, 5]);
// // A) IDENTIFY
// console.log(amplitudeBug);

// Coding challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!

// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the x days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// -Transoform each element to string with ºC
// - Strings need to contain day (index + 1)
// - Add ... between elements and start and end of string

const printForecast = function (data) {
  let element = '';
  for (let i = 0; i < data.length; i++) {
    element += `${data[i]}ºC in ${i + 1} days ... `;
  }
  return element;
};

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log('... ' + printForecast(data2));
