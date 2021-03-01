'use strict';

// const arr = [2, 3, 4];
// const [a, b, c] = arr; // ... Destructuring
// console.log(a, b, c); // 2 3 4

// If we want the first and last element.
// let [first, , third] = arr;
// console.log(first, third); // 2 4

// If we want to switch their places
// let [first, second, third] = arr;
// console.log(first, second, third); // 2 3 4
// [first, second, third] = [third, second, first];
// console.log(first, second, third); // 4 3 2

// const obj = {
//   first: ['alabala', 'portukala'],
//   second: ['tuka ima', 'tuka nqma'],
//   fnc: function (firstIndex, secondIndex) {
//     return [this.first[firstIndex], this.second[secondIndex]];
//   },
// };

// const [one, two] = obj.fnc(1, 0);
// console.log(one, two); // portukala tuka ima

// Nested destructuring
// const nested = [2, 3, [4, 5]];
// const [a, , b] = nested;
// console.log(a, b); // 2 [4, 5]
// const [a, , [b, c]] = nested;
// console.log(a, b, c); // 2 4 5

// const [a, b, c, d] = [1, 2, 3];
// console.log(a, b, c, d); // 1 2 3 Undefined

const [a = 1, b = 1, c = 1, d = 1] = [1, 2, 3];
console.log(a, b, c, d); // 1 2 3 1
