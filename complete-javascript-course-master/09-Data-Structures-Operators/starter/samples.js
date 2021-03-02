'use strict';

////////////////////////////////
// Array destructuring

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

// const [a = 1, b = 1, c = 1, d = 1] = [1, 2, 3];
// console.log(a, b, c, d); // 1 2 3 1

///////////////////////////////////////////
// Object destructuring

const person = {
  firstName: 'Pesho',
  lastName: 'Pecheniq',
  age: 25,
};
console.log(person);

// const { name, secondName, years } = person; // Undefined Undefined Undefined... When we destruture an object we have to use the same property names as the properties of the object we copy . Otherwise its gona be properties with undefined values.
// const { firstName, lastName, age } = person;
// console.log(firstName, lastName, age); // Pesho pecheniq 25
// If we want to use these properties, but with changed names,  we have to do this:
const { firstName: MainName, lastName: secondName, age: years } = person;
console.log(MainName, secondName, years); // Pesho Pecheniq 25

const { lastName, age, firstName } = person;
// console.log(lastname, age, firstName); // Uncaught ReferenceError: lastname is not defined... Seems like we cant switch the propertie's position.
